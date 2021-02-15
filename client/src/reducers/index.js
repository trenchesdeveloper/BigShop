import { combineReducers } from "redux";
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryGetReducer,
  categoryListReducer,
  categoryUpdateReducer,
} from "./categoryReducer";
import { subCategoryCreateReducer, subCategoryDeleteReducer, subCategoryGetReducer, subCategoryListReducer, subCategoryUpdateReducer } from "./subCategoryReducer";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  category: categoryGetReducer,
  categoryUpdate: categoryUpdateReducer,
  subCategoryCreate: subCategoryCreateReducer,
  subCategoryList: subCategoryListReducer,
  subCategory: subCategoryGetReducer,
  subCategoryUpdate: subCategoryUpdateReducer,
  subCategoryDelete: subCategoryDeleteReducer,
});

export default reducer;
