import {
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
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
    const { data } = await axios.post("/api/category", name, config);

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
