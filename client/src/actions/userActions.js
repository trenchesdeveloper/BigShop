import { LOGGED_IN_USER } from "../constants/userConstants";

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGGED_IN_USER, payload: user });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
};
