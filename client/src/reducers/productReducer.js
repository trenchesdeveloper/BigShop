import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_LISTS_FAIL,
  PRODUCT_LISTS_REQUEST,
  PRODUCT_LISTS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_COUNT_FAIL,
  PRODUCT_COUNT_REQUEST,
  PRODUCT_COUNT_SUCCESS,
  PRODUCT_UPDATE_STAR_REQUEST,
  PRODUCT_UPDATE_STAR_SUCCESS,
  PRODUCT_UPDATE_STAR_FAIL,
  PRODUCT_UPDATE_STAR_RESET,
  PRODUCT_GET_RELATED_REQUEST,
  PRODUCT_GET_RELATED_SUCCESS,
  PRODUCT_GET_RELATED_FAIL,
} from "../constants/productConstants";

export const productCreateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productListByCountReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LISTS_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_LISTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.total,
      };

    case PRODUCT_LISTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productGetReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_GET_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_GET_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productGetRelatedReducer = (state = { relatedProducts: [] }, action) => {
  switch (action.type) {
    case PRODUCT_GET_RELATED_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_GET_RELATED_SUCCESS:
      return { loading: false, relatedProducts: action.payload };

    case PRODUCT_GET_RELATED_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};

export const productCountReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_COUNT_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_COUNT_SUCCESS:
      return { loading: false, total: action.payload };

    case PRODUCT_COUNT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productUpdateStarReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_STAR_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_UPDATE_STAR_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case PRODUCT_UPDATE_STAR_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_UPDATE_STAR_RESET:
      return {};

    default:
      return state;
  }
};
