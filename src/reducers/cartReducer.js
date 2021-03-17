import { CART_ADD_ITEM, CART_CLEAR_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstantStant";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload];
    case CART_REMOVE_ITEM:
      return state.filter((movie) => movie.id !== action.payload);
    case CART_CLEAR_ITEM:
      return action.payload;
    default:
      return state;
  }
};
