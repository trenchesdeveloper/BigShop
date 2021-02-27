import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productGet } from "../actions/productActions";
import SingleProduct from "../components/cards/SingleProduct";

const Product = ({ match }) => {
  const { slug } = match.params;
  const dispatch = useDispatch();

  const { error, loading, product } = useSelector((state) => state.productGet);

  useEffect(() => {
    dispatch(productGet(slug));
  }, [slug, dispatch]);

  return (
    <div className="container-fluid">
      {/* first row is product row */}
      <div className="row pt-4">
        <SingleProduct product={product} />
      </div>

      {/* second row is for related product */}

      <div className="row pt-4">
        <h4>Related Products</h4>
      </div>
    </div>
  );
};

export default Product;
