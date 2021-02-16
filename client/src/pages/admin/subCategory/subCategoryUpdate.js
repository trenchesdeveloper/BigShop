import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../../components/Nav/AdminNav";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  categoryCreate,
  categoryDelete,
  categoryGet,
  categoryList,
  categoryUpdate,
} from "../../../actions/categoryActions";
import { CATEGORY_UPDATE_RESET } from "../../../constants/categoryConstants";
import CategoryForm from "../../../components/forms/CategoryForm";
import { subCategoryUpdate } from "../../../actions/subCategoryActions";
import { SUBCATEGORY_UPDATE_RESET } from "../../../constants/subCategoryConstant";

const SubCategoryUpdate = ({ match, history }) => {
  const { slug } = match.params;

  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.subCategoryUpdate);

  const { subCategory } = useSelector((state) => state.subCategory);
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(categoryGet(slug));
    setName(subCategory.name);
  }, [dispatch, slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subCategoryUpdate(userInfo.token, {name}, slug));
    toast.success("updated successfully");

    history.push("/admin/sub");
    dispatch({ type: SUBCATEGORY_UPDATE_RESET });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h4>Update Category</h4>
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            btn="Update"
          />
        </div>
      </div>
    </div>
  );
};

export default SubCategoryUpdate;
