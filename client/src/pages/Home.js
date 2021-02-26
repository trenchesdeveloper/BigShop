import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListByCount } from "../actions/productActions";
import Jumbotron from "../components/cards/Jumbotron";
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
      <div className="jumbotron text-danger text-center h1 font-weight-bold">
        <Jumbotron
          text={["Latest Products", "Best Selling", "Latest Product"]}
        />
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
