import { combineReducers } from "redux";
import { categoryCreateReducer } from "./categoryReducer";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  categoryCreate: categoryCreateReducer,
});

export default reducer;
