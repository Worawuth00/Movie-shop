import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const imgURL = "https://image.tmdb.org/t/p/w500";

const Movie = ({ id, title, poster_path, overview, vote_average, price }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const addToCartHandle = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div className="movie-card">
      <div className="image-card">
        <img src={poster_path ? imgURL + poster_path : "no-img.jpg"} alt={title} />
        <div className="overview">
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      </div>
      <div className="detail">
        <h4>{title}</h4>
        <div className="footer">
          <p>
            <i className="icon-star fas fa-star"></i>
            {vote_average}/10
          </p>
          <p>
            ฿ {price}
            <button
              disabled={cart.find((item) => item.id === id)}
              className="btn"
              onClick={() => addToCartHandle(id)}
            >
              <i className="icon-add-cart fas fa-shopping-cart"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
