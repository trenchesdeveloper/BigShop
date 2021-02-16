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
  categoryList,
} from "../../../actions/categoryActions";
import CategoryForm from "../../../components/forms/CategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";
import {
  subCategoryCreate,
  subCategoryDelete,
  subCategoryGet,
  subCategoryList,
  subCategoryUpdate,
} from "../../../actions/subCategoryActions";
import { SUBCATEGORY_UPDATE_RESET } from "../../../constants/subCategoryConstant";

const SubCategoryUpdate = ({ match, history }) => {
  const { slug } = match.params;

  const [name, setName] = useState("");
  const [parent, setParent] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.subCategoryUpdate);
  const {
    loading: loadingSubCategory,
    error: errorSubCategory,
    subCategory,
  } = useSelector((state) => state.subCategory);

  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = useSelector((state) => state.categoryList);

  useEffect(() => {
    dispatch(categoryList());
    dispatch(subCategoryGet(slug));
    setName(subCategory && subCategory.name);
    setParent(subCategory && subCategory.parent);
  }, [dispatch, slug]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(subCategoryUpdate(userInfo.token, { name, parent }, slug));

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
          <h4>Update Sub Category</h4>
          <div className="form-group">
            <label htmlFor="">Parent Category</label>
            <select
              name="name"
              className="form-control"
              onChange={(e) => setParent(e.target.value)}
            >
              <option value="select">select category</option>
              {loadingCategories ? (
                <Loader />
              ) : (
                categories.length > 0 &&
                categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))
              )}
            </select>
          </div>
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            btn="update"
          />
         
        </div>
      </div>
    </div>
  );
};

export default SubCategoryUpdate;
