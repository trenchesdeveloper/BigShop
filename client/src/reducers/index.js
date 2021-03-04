import { combineReducers } from "redux";

import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryGetReducer,
  categoryListReducer,
  categorySubGetReducer,
  categoryUpdateReducer,
} from "./categoryReducer";
import {
  productCountReducer,
  productCreateReducer,
  productDeleteReducer,
  productFetchFilterReducer,
  productGetReducer,
  productGetRelatedReducer,
  productListByCountReducer,
  productListReducer,
  productUpdateReducer,
  productUpdateStarReducer,
} from "./productReducer";
import { searchReducer } from "./searchReducer";
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
  productGet: productGetReducer,
  productUpdate: productUpdateReducer,
  productList: productListReducer,
  productCount: productCountReducer,
  productUpdateStar: productUpdateStarReducer,
  productGetRelated: productGetRelatedReducer,
  search: searchReducer,
  productFetchFilter: productFetchFilterReducer,
});

export default reducer;
