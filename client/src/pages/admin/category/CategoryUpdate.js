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
} from "../../../actions/categoryActions";

const CategoryUpdate = ({ match }) => {
  const { slug } = match.params;
  const {
    loading: loadingCategory,
    error: errorCategory,
    category,
  } = useSelector((state) => state.category);

  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, success } = useSelector(
    (state) => state.categoryCreate
  );

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.categoryDelete);

  useEffect(() => {
    dispatch(categoryGet(slug));
  }, [dispatch, slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              <button className="btn btn-outline-primary  ">Update</button>

              <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
