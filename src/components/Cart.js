import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartAction";

const imgURL = "https://image.tmdb.org/t/p/w500";

const Cart = ({
  id,
  title,
  poster_path,
  original_language,
  vote_average,
  price,
}) => {
  const dispatch = useDispatch();

  const removeHandle = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="cart-card">
      <div className="image">
        <img src={poster_path ? imgURL + poster_path : "no-img.jpg"} alt={title} />
      </div>
      <div className="detail">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <p className="language">Language : {original_language}</p>
        <p className="rate">Rate : {vote_average}/10</p>
        <p className="price">Price : ฿ {price}</p>
        <button className="remove" onClick={() => removeHandle(id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
