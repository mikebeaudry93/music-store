import React from "react";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

const Cart = () => {
  const { cart, total } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="cart-items cart-section">
      <h2 className="cart-section-title">Your Cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2 className="cart-section-title total">total : $ {total}</h2>
      {user.token ? (
        <Link
          to="/checkout"
          className="btn btn-single-product btn-block cart-btn"
        >
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-single-product btn-block cart-btn">
          login
        </Link>
      )}
    </section>
  );
};

export default Cart;
