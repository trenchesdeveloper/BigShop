import {
  LOGOUT,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";
import { createOrUpdateUser } from "../fetchUtils/auth";
import {} from "react-router-dom";

export const loginUser = (token) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const config = {
      headers: {
        token,
      },
    };
    // fetch to backend and verify token
    const { data } = await axios.post(
      "/api/auth/createOrUpdateUser",
      {},
      config
    );

    data.token = token;

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: LOGOUT });
};
