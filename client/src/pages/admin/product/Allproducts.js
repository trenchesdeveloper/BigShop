import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListByCount } from "../../actions/productActions";
import AdminNav from "../../components/Nav/AdminNav";
import { LoadingOutlined } from "@ant-design/icons";
import AdminProductCard from "../../components/cards/AdminProductCard";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productListByCount
  );

  useEffect(() => {
    dispatch(productListByCount(1));
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <LoadingOutlined className="h1 text-danger" />
          ) : (
            <h4>All Products</h4>
          )}
          <div className="col">
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-4">
                  <AdminProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
