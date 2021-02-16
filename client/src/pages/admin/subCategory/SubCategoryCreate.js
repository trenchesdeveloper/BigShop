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
  subCategoryList,
} from "../../../actions/subCategoryActions";

const SubCategoryCreate = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  //   step1 - create a keyword state
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, success } = useSelector(
    (state) => state.subCategoryCreate
  );
  const {
    loading: loadingSubCategories,
    error: errorSubCategories,
    subCategories,
  } = useSelector((state) => state.subCategoryList);

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.subCategoryDelete);

  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = useSelector((state) => state.categoryList);

  console.log(categories);

  useEffect(() => {
    dispatch(subCategoryList());
    dispatch(categoryList());

    if (successDelete) {
      dispatch(categoryList());
    }
  }, [dispatch, successDelete]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(subCategoryCreate(userInfo.token, { name, category }));
    setName("");
  };

  const deleteHandler = (slug) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(subCategoryDelete(userInfo.token, slug));
    }

    if (successDelete) {
      toast.success("Deleted Successfully");
      dispatch(categoryList());
      dispatch(subCategoryList())
    } else if (errorDelete) {
      toast.error(error);
    }
  };

  // step 4
  const searched = (keyword) => (check) => {
    console.log(check);
    return check.name.toLowerCase().includes(keyword);
  };
  useEffect(() => {
    if (success) {
      toast.success("sub Category Created");
      dispatch(categoryList());
      dispatch(subCategoryList());
    } else if (error) {
      toast.error(error);
    }
  }, [dispatch, error, success]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h4>Create Sub Category</h4>

          <div className="form-group">
            <label htmlFor="">Parent Category</label>
            <select
              name="name"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
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

          {JSON.stringify(category)}
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            btn="create"
          />

          {/* step2  and step3 create input field */}
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          {loadingSubCategories ? (
            <Loader />
          ) : errorSubCategories ? (
            <Message>{errorSubCategories}</Message>
          ) : (
            subCategories.filter(searched(keyword)).map((subCat) => (
              <div key={subCat.id} className="alert alert-secondary">
                {subCat.name}
                <span
                  className="float-right btn btn-sm"
                  onClick={() => deleteHandler(subCat.slug)}
                >
                  {" "}
                  <DeleteOutlined className="text-danger" />{" "}
                </span>
                <Link to={`/admin/sub/${subCat.slug}`}>
                  {" "}
                  <span className="float-right btn btn-sm">
                    {" "}
                    <EditOutlined className="text-warning" />{" "}
                  </span>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCreate;
