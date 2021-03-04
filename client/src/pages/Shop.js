import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListByCount } from "../actions/productActions";

const Shop = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    (state) => state.productListByCount
  );

  useEffect(() => {
    dispatch(productListByCount(3));
  }, []);

  return <div></div>;
};

export default Shop;
