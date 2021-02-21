import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
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

export const productListReducer = (state = { products:[] }, action) => {
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

