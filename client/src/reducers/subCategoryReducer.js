import {
  SUBCATEGORY_CREATE_FAIL,
  SUBCATEGORY_CREATE_REQUEST,
  SUBCATEGORY_CREATE_SUCCESS,
  SUBCATEGORY_DELETE_FAIL,
  SUBCATEGORY_DELETE_REQUEST,
  SUBCATEGORY_DELETE_SUCCESS,
  SUBCATEGORY_GET_FAIL,
  SUBCATEGORY_GET_REQUEST,
  SUBCATEGORY_GET_SUCCESS,
  SUBCATEGORY_LIST_FAIL,
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
  SUBCATEGORY_UPDATE_FAIL,
  SUBCATEGORY_UPDATE_REQUEST,
  SUBCATEGORY_UPDATE_RESET,
  SUBCATEGORY_UPDATE_SUCCESS,
} from "../constants/subCategoryConstant";

export const subCategoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBCATEGORY_CREATE_REQUEST:
      return { loading: true };

    case SUBCATEGORY_CREATE_SUCCESS:
      return { loading: false, success: true, subCategory: action.payload };

    case SUBCATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const subCategoryListReducer = (
  state = { subCategories: [] },
  action
) => {
  switch (action.type) {
    case SUBCATEGORY_LIST_REQUEST:
      return { loading: true };

    case SUBCATEGORY_LIST_SUCCESS:
      return { loading: false, subCategories: action.payload };

    case SUBCATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const subCategoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBCATEGORY_DELETE_REQUEST:
      return { loading: true };

    case SUBCATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true };

    case SUBCATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const subCategoryGetReducer = (
  state = { subCategory: {}, products: [] },
  action
) => {
  switch (action.type) {
    case SUBCATEGORY_GET_REQUEST:
      return { loading: true };

    case SUBCATEGORY_GET_SUCCESS:
      return {
        loading: false,
        subCategory: action.payload.subCat,
        products: action.payload.products,
      };

    case SUBCATEGORY_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const subCategoryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBCATEGORY_UPDATE_REQUEST:
      return { loading: true };

    case SUBCATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case SUBCATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case SUBCATEGORY_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};
