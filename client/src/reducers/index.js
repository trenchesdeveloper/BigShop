import { combineReducers } from "redux";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
});

export default reducer;
