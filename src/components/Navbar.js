import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { serachMovie } from "../actions/movieAction";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const searchHandle = (e) => {
    e.preventDefault();
    dispatch(serachMovie(search));
    setSearch("")
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <h1>Movie</h1>
          </a>
        </div>
        <div className="nav-cart-search">
          <Link to="/cart">
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
            <i className="icon-cart fas fa-shopping-cart"></i>
          </Link>
          <form onSubmit={searchHandle}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className="icon-search fas fa-search" onClick={searchHandle}></i>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
