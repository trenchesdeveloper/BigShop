import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/Nav/AdminNav";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import {
  createCategory,
  getCategories,
  deleteCategory,
} from "../../../fetchUtils/auth";
import { categoryCreate, categoryList } from "../../../actions/categoryActions";

const CategoryCreate = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, success, category } = useSelector(
    (state) => state.categoryCreate
  );

  useEffect(() => {
    dispatch(categoryList());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(categoryCreate(userInfo.token, name));
    setName("");
  };

  useEffect(() => {
    if (success) {
      toast.success("Category Created");
    } else if (error) {
      toast.error(error);
    }
  }, [error, success]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h4>Create Category</h4>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                type="text"
                value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                autoFocus
                required
              />
              <br />
              <button className="btn btn-outline-primary  ">Save</button>

              <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
