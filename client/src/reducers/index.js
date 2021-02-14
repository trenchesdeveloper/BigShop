import { combineReducers } from "redux";
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryListReducer,
} from "./categoryReducer";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
});

export default reducer;
