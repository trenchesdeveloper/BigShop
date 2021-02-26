import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productCount, productList } from "../../actions/productActions";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";
import { Pagination } from "antd";

const NewArrivals = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(productList("createdAt", "desc", page));
  }, [dispatch, page]);

  //   useEffect(() => {
  //     dispatch(productCount());
  //   }, [dispatch]);

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

      <div className="row">
        <nav className="col-md-4 offset-md-4 pt-5 p-3">
          <Pagination
            current={page}
            total={(productsCount / 3) * 10}
            onChange={(value) => setPage(value)}
          />
        </nav>
      </div>
    </>
  );
};

export default NewArrivals;
