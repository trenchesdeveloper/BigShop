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

const CategoryUpdate = ({ match, history }) => {
  const { slug } = match.params;

  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.categoryUpdate);

  useEffect(() => {
    dispatch(categoryGet(slug));
    if (successUpdate) {
      history.push("/admin/category");
      dispatch({ type: CATEGORY_UPDATE_RESET });
    }
  }, [dispatch, slug, successUpdate, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(categoryUpdate(userInfo.token, name, slug));
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
              <button className="btn btn-outline-primary" disabled={!name}>
                Update
              </button>

              <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
