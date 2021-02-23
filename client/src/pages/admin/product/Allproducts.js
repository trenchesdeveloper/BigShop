import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  productDelete,
  productListByCount,
} from "../../../actions/productActions";
import AdminNav from "../../../components/Nav/AdminNav";
import { LoadingOutlined } from "@ant-design/icons";
import AdminProductCard from "../../../components/cards/AdminProductCard";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productListByCount
  );

  const { userInfo } = useSelector((state) => state.userLogin);

  const { success: successDelete, error: errorDelete } = useSelector(
    (state) => state.productDelete
  );

  useEffect(() => {
    dispatch(productListByCount(1));
  }, [dispatch]);

  const handleDelete = (slug) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(productDelete(userInfo.token, slug));
    }

    if (errorDelete) {
      toast.error(errorDelete);
    } else {
      toast.success("delete successfully");
    }
  };

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
                <div key={product.id} className="col-md-4 pb-3">
                  <AdminProductCard
                    product={product}
                    handleDelete={handleDelete}
                  />
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
