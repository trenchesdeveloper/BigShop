import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListByCount } from "../actions/productActions";
import ProductCard from "../components/cards/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productListByCount
  );
  useEffect(() => {
    dispatch(productListByCount(3));
  }, [dispatch]);
  return (
    <>
      <div className="jumbotron">
        {loading ? <h4>Loading...</h4> : <h4>All Products</h4>}
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product._id} className="col-md-4">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
