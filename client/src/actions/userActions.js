import { LOGGED_IN_USER, LOGOUT } from "../constants/userConstants";
import axios from "axios";
import { createOrUpdateUser } from "../fetchUtils/auth";

export const loginUser = (token) => async (dispatch) => {
  console.log(token.token);
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
    console.log(data);

    dispatch({ type: LOGGED_IN_USER, payload: data });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT, payload: {} });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
};
