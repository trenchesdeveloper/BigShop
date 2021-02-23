import { combineReducers } from "redux";
import { productListByCount } from "../actions/productActions";
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryGetReducer,
  categoryListReducer,
  categorySubGetReducer,
  categoryUpdateReducer,
} from "./categoryReducer";
import {
  productCreateReducer,
  productDeleteReducer,
  productListByCountReducer,
} from "./productReducer";
import {
  subCategoryCreateReducer,
  subCategoryDeleteReducer,
  subCategoryGetReducer,
  subCategoryListReducer,
  subCategoryUpdateReducer,
} from "./subCategoryReducer";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  category: categoryGetReducer,
  categoryUpdate: categoryUpdateReducer,
  categorySub: categorySubGetReducer,
  subCategoryCreate: subCategoryCreateReducer,
  subCategoryList: subCategoryListReducer,
  subCategory: subCategoryGetReducer,
  subCategoryUpdate: subCategoryUpdateReducer,
  subCategoryDelete: subCategoryDeleteReducer,
  productCreate: productCreateReducer,
  productListByCount: productListByCountReducer,
  productDelete: productDeleteReducer,
});

export default reducer;
