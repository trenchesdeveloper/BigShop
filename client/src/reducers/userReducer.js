import { LOGGED_IN_USER, LOGOUT } from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return {...state,  user: action.payload };

    case LOGOUT:
      return {...state, user: {} };

    default:
      return state;
  }
};
