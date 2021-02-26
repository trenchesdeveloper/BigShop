import { LoadingOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryGetSubs,
  categoryList,
} from "../../../actions/categoryActions";
import { productGet } from "../../../actions/productActions";
import { subCategoryGet } from "../../../actions/subCategoryActions";
import FileUpload from "../../../components/forms/FileUpload";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";
import AdminNav from "../../../components/Nav/AdminNav";
import { subCategoryCreateReducer } from "../../../reducers/subCategoryReducer";

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
  const [arrayOfSubIds, setArrayOfSubIds] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.productGet);

  const { categories } = useSelector((state) => state.categoryList);
  const { subs } = useSelector((state) => state.categorySub);

  const onLoad = () => {
    dispatch(productGet(slug));
    dispatch(categoryList());
  };

  useEffect(() => {
    onLoad();
    console.log(product);

    setValues({ ...values, ...product, categories: categories });
    // dispatch(categoryGetSubs(product.category._id));
    setSubOptions(subs);

    product.subs.map((p) => setArrayOfSubIds((prev) => p._id));
  }, []);

  useEffect(() => {
    if (subs) {
      setSubOptions(subs);
    }
    // product.subs.map((s) => {
    //   return setArrayOfSubIds(s._id);
    // });
  }, [subs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });

    dispatch(categoryGetSubs(e.target.value));

    if (values.category._id === e.target.value) {
      dispatch(productGet(slug));
    }
    setArrayOfSubIds([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-red h1" />
          ) : (
            <h4>Product Update</h4>
          )}
          <div className="p-3">
            <FileUpload
              values={values}
              setLoading={setLoading}
              setValues={setValues}
            />
          </div>
          <ProductUpdateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            setValues={setValues}
            handleCategoryChange={handleCategoryChange}
            subOptions={subOptions}
            arrayOfSubIds={arrayOfSubIds}
            setArrayOfSubIds={setArrayOfSubIds}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
