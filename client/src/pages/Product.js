import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productGet } from "../actions/productActions";

const Product = ({ match }) => {
  const { slug } = match.params;
  const dispatch = useDispatch();

  const {error, loading, product} = useSelector(state => state.productGet)

  useEffect(() => {
    dispatch(productGet(slug));
  }, [slug, dispatch]);

  return <div>

      {JSON.stringify(product)}
  </div>;
};

export default Product;
