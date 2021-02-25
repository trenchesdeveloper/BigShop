import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";

export const productCreate = (token, values) => async (dispatch) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  try {
    const config = {
      headers: {
        token,
      },
    };

    // fetch to backend and verify token
    const { data } = await axios.post("/api/product", values, config);

    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productListByCount = (count) => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    // fetch to backend and verify token
    const { data } = await axios.get(`/api/product/${count}`);

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const productGet = (slug) => async (dispatch) => {
  dispatch({ type: PRODUCT_GET_REQUEST });
  try {
    // fetch to backend and verify token
    const { data } = await axios.get(`/api/product/product/${slug}`);



    dispatch({ type: PRODUCT_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productDelete = (token, slug) => async (dispatch) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST });
  try {
    const config = {
      headers: {
        token,
      },
    };

    // fetch to backend and verify token
    await axios.delete(`/api/product/${slug}`, config);

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const categoryGet = (slug) => async (dispatch) => {
//   dispatch({ type: CATEGORY_GET_REQUEST });
//   try {
//     // fetch to backend and verify token
//     const { data } = await axios.get(`/api/category/${slug}`);

//     dispatch({ type: CATEGORY_GET_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: CATEGORY_GET_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const categoryUpdate = (token, name, slug) => async (dispatch) => {
//   dispatch({ type: CATEGORY_UPDATE_REQUEST });
//   try {
//     const config = {
//       headers: {
//         token,
//       },
//     };

//     // fetch to backend and verify token
//     const { data } = await axios.put(`/api/category/${slug}`, { name }, config);
//     console.log(data);

//     dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: CATEGORY_UPDATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
