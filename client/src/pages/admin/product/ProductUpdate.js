import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productGet } from "../../../actions/productActions";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";
import AdminNav from "../../../components/Nav/AdminNav";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["black", "brown", "silver", "white", "blue"],
  brands: ["Apple", "Lenovo", "Samsung", "Microsoft", "ASUS"],
  color: "",
  brand: "",
};

const ProductUpdate = ({ match }) => {
  const { slug } = match.params;
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();

  const { error: errorGet, success: successGet, product } = useSelector(
    (state) => state.productGet
  );

  useEffect(() => {
    dispatch(productGet(slug));

    if (product) {
      setValues({ ...values, ...product });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //
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
          <h4>Product Update</h4>
          <ProductUpdateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
