import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListByCount } from "../actions/productActions";
import ProductCard from "../components/cards/ProductCard";

const Shop = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    (state) => state.productListByCount
  );

  useEffect(() => {
    dispatch(productListByCount(12));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">Sidebar filter</div>

        <div className="col-md-9">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="text-danger">Products</h4>
          )}

          {products && products.length < 1 && <p>No Products Found</p>}

          <div className="row pb-5">
            {products &&
              products.map((product) => (
                <div className="col-md-4 mt-3" key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
