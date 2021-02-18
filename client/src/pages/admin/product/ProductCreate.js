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
  const {
    title,
    description,
    price,
    categories,
    category,
    sub,
    shipping,
    quantity,
    images,
    colors,
    color,
    brands,
    brand,
  } = values;

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

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={description}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Price</label>
              <input
                type="number"
                name="price"
                value={price}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Shipping</label>
              <select
                name="shipping"
                id=""
                className="form-control"
                onChange={handleChange}
              >
                <option>Please select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={quantity}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="color">Color</label>
              <select
                name="color"
                id=""
                className="form-control"
                onChange={handleChange}
              >
                <option>Please select</option>
                {colors.map((c) => (
                  <option value={c} key={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <select
                name="brand"
                id=""
                className="form-control"
                onChange={handleChange}
              >
                <option>Please select</option>
                {brands.map((b) => (
                  <option value={b} key={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <button className="btn btn-outline-info">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
