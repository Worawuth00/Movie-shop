import axios from "axios";
import { CART_ADD_ITEM, CART_CLEAR_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstantStant";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=148df88f93f21a7ad6a77f58c7ffd9d8`
  );
  dispatch({ type: CART_ADD_ITEM, payload: { ...data, price: 100 } });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart));
};

export const clearCart = () => (dispatch, getState) => {
  dispatch({ type: CART_CLEAR_ITEM, payload: [] });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart));
};
