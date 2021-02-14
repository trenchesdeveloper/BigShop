import {
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../constants/categoryConstants";
import axios from "axios";

export const categoryCreate = (token, name) => async (dispatch) => {
  dispatch({ type: CATEGORY_CREATE_REQUEST });
  try {
    const config = {
      headers: {
        token,
      },
    };
   
    // fetch to backend and verify token
    const { data } = await axios.post("/api/category", { name }, config);
    console.log(data);

    dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const categoryList = () => async (dispatch) => {
  dispatch({ type: CATEGORY_LIST_REQUEST });
  try {

    // fetch to backend and verify token
    const { data } = await axios.get("/api/category");
    console.log(data);

    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




export const categoryDelete = (token, slug) => async (dispatch) => {
  dispatch({ type: CATEGORY_DELETE_REQUEST });
  try {
    const config = {
      headers: {
        token,
      },
    };

    // fetch to backend and verify token
    const { data } = await axios.delete(`/api/category/${slug}`, config);
    console.log(data);

    dispatch({ type: CATEGORY_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: CATEGORY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
