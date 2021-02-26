import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../actions/productActions";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";

const BestSellers = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(productList("sold", "desc", 3));
  }, [dispatch]);
  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingCard count={3} />
        ) : (
          <div className="row">
            {products.map((product) => {
              return (
                <div key={product._id} className="col-md-4">
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default BestSellers;
