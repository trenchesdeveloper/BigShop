import { LOGGED_IN_USER, LOGOUT } from "../constants/userConstants";

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGGED_IN_USER, payload: user });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT, payload: null });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
};

