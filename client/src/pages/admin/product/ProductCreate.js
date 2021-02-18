import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../../components/Nav/AdminNav";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CategoryForm from "../../../components/forms/CategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";
import { productCreate } from "../../../actions/productActions";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  sub: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["black", "brown", "silver", "white", "blue"],
  brands: ["Apple", "Lenovo", "Samsung", "Microsoft", "ASUS"],
  color: "",
  brand: "",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { product, success, error } = useSelector(
    (state) => state.productCreate
  );

  // useEffect(() => {
  //   if (success) {
  //     toast.success("product created");
  //   }
  // }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //dispatch create product actions
    dispatch(productCreate(userInfo.token, values));

    if (success) {
      window.alert(`${product.title} created!`);
      window.location.reload();
    } else if (error) {
      toast.error(error);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Product Create</h4>
          <hr />

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values ={values}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
