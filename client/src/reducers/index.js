import { combineReducers } from "redux";
import { categoryCreateReducer, categoryListReducer } from "./categoryReducer";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
});

export default reducer;
