import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryGetSubs,
  categoryList,
} from "../../../actions/categoryActions";
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
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);

  const dispatch = useDispatch();

  const { error: errorGet, success: successGet, product } = useSelector(
    (state) => state.productGet
  );

  const { categories } = useSelector((state) => state.categoryList);
  const { subs } = useSelector((state) => state.categorySub);

  useEffect(() => {
    dispatch(productGet(slug));
    dispatch(categoryList());

    if (product || categories) {
      setValues({ ...values, ...product, categories: categories });
    }
  }, []);

  useEffect(() => {
    if (subs) {
      setSubOptions(subs);
    }
  }, [subs, values.category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setValues({ ...values, subs: [], category: e.target.value });

    dispatch(categoryGetSubs(e.target.value));
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
            handleCategoryChange={handleCategoryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
