import { ADD_TO_CART } from '../constants/cartConstant';

export const addToCart = (cart) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  });
};
