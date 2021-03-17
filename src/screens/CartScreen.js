import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../actions/cartAction";
import Cart from "../components/Cart";

const CartScreen = () => {
  const [popup, setPopup] = useState(false);
  const [time, setTime] = useState(null);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const subTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const disCount =
    cart.length >= 5
      ? (subTotal * 20) / 100
      : cart.length >= 3
      ? (subTotal * 10) / 100
      : 0;

  const total = subTotal - disCount;

  // ########## Solution countdown from stack overflow ##################
  useEffect(() => {
    if (!time) return;

    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const clearCartHandle = () => {
    dispatch(clearCart());
  };
  // #################################################

  const popupHandle = () => {
    setPopup(true);
    setTime(60)
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="empty">
          <h1>Cart Empty</h1>
          <Link to="/">
            <button className="btn btn-empty">Go To Store</button>
          </Link>
        </div>
      ) : (
        <div className="cart-center container">
          <div className="cart-detail">
            {cart.map((movie) => {
              return <Cart key={movie.id} {...movie} />;
            })}
          </div>
          <div className="summary">
            <h2>Total Payment</h2>
            <hr />
            <div className="payment-detail">
              <div className="payment-movie">
                <p>Subtotal</p>
                <p>
                  Discount (
                  {cart.length >= 5 ? (
                    <span>-20%</span>
                  ) : cart.length >= 3 ? (
                    <span>-10%</span>
                  ) : null}
                  )
                </p>

                <h2>Total</h2>
              </div>
              <div className="payment-price">
                <h4>{subTotal}</h4>
                <h4>{disCount}</h4>
                <h2>{total}</h2>
              </div>
            </div>
            <button className="btn btn-clear-cart" onClick={clearCartHandle}>
              Clear Cart
            </button>
            <button className="btn btn-checkout" onClick={popupHandle}>
              Checkout
            </button>
          </div>
        </div>
      )}

      <div
        className={popup ? "popup show-popup" : "popup"}
        onClick={() => setPopup(false)}
      >
        <i className="icon-close fas fa-window-close"></i>
        <img src="/popcorn.png" alt="" />
        <h3>Let enjoy your favorite movie</h3>
        <p>Please kindly pay ฿{total} here</p>
        <h4>xxx-xxxxxx-x</h4>
        <h4>Time remaining : {time}</h4>
      </div>
    </div>
  );
};

export default CartScreen;
