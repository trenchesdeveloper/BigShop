import {
 SUBCATEGORY_CREATE_FAIL,
 SUBCATEGORY_CREATE_REQUEST,
 SUBCATEGORY_CREATE_SUCCESS,
 SUBCATEGORY_DELETE_FAIL,
 SUBCATEGORY_DELETE_REQUEST,
 SUBCATEGORY_DELETE_SUCCESS,
 SUBCATEGORY_GET_FAIL,
 SUBCATEGORY_GET_REQUEST,
 SUBCATEGORY_GET_SUCCESS,
 SUBCATEGORY_LIST_FAIL,
 SUBCATEGORY_LIST_REQUEST,
 SUBCATEGORY_LIST_SUCCESS,
 SUBCATEGORY_UPDATE_FAIL,
 SUBCATEGORY_UPDATE_REQUEST,
 SUBCATEGORY_UPDATE_SUCCESS,
} from "../constants/categoryConstants";
import axios from "axios";

export const subCategoryCreate = (token, name) => async (dispatch) => {
  dispatch({ type: SUBCATEGORY_CREATE_REQUEST });
  try {
    const config = {
      headers: {
        token,
      },
    };

    // fetch to backend and verify token
    const { data } = await axios.post("/api/sub", { name }, config);
    console.log(data);

    dispatch({ type: SUBCATEGORY_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUBCATEGORY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subCategoryList = () => async (dispatch) => {
  dispatch({ type: SUBCATEGORY_LIST_REQUEST });
  try {
    // fetch to backend and verify token
    const { data } = await axios.get("/api/sub");
    console.log(data);

    dispatch({ type: SUBCATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUBCATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subCategoryDelete = (token, slug) => async (dispatch) => {
  dispatch({ type: SUBCATEGORY_DELETE_REQUEST });
  try {
    const config = {
      headers: {
        token,
      },
    };

    // fetch to backend and verify token
    const { data } = await axios.delete(`/api/sub/${slug}`, config);
    console.log(data);

    dispatch({ type: SUBCATEGORY_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SUBCATEGORY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subCategoryGet = (slug) => async (dispatch) => {
  dispatch({ type: SUBCATEGORY_GET_REQUEST });
  try {
    // fetch to backend and verify token
    const { data } = await axios.get(`/api/sub/${slug}`);

    dispatch({ type: SUBCATEGORY_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUBCATEGORY_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subCategoryUpdate = (token, name, slug) => async (dispatch) => {
  dispatch({ type: SUBCATEGORY_UPDATE_REQUEST });
  try {
    const config = {
      headers: {
        token,
      },
    };

    // fetch to backend and verify token
    const { data } = await axios.put(`/api/sub/${slug}`, { name }, config);
    console.log(data);

    dispatch({ type: SUBCATEGORY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUBCATEGORY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
