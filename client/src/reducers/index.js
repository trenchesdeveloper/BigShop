import { combineReducers } from "redux";
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryGetReducer,
  categoryListReducer,
  categoryReducer,
} from "./categoryReducer";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  category: categoryGetReducer,
});

export default reducer;
