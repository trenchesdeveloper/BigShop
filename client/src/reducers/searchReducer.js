import {
  SEARCH_GET_FAIL,
  SEARCH_GET_REQUEST,
  SEARCH_GET_SUCCESS,
} from "../constants/searchConstants";

export const searchReducer = (state = { text: {} }, action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
