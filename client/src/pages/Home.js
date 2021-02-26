import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListByCount } from "../actions/productActions";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productListByCount);
  useEffect(() => {
    dispatch(productListByCount(3));
  }, [dispatch]);
  return (
    <div>
      Home
      {JSON.stringify(products)}
    </div>
  );
};

export default Home;
