import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const reducer = combineReducers({
  userInfo: userReducer,
});

export default reducer;
