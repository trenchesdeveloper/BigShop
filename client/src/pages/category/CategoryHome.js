import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoryGet } from "../../actions/categoryActions";
import ProductCard from "../../components/cards/ProductCard";
const CategoryHome = ({ match }) => {
  const { slug } = match.params;

  const dispatch = useDispatch();
  const { loading, error, category, products } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(categoryGet(slug));
  }, [slug, dispatch]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {products.length} Products in "{category.name}" category
            </h4>
          )}
        </div>
      </div>

      <div className="row">
          {products && products.map((product=> (
              <div key={product._id} className='col-md-4'>
                    <ProductCard product={product}/>
              </div>
          )))}
      </div>
    </div>
  );
};

export default CategoryHome;
