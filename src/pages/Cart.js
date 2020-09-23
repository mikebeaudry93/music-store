import React from "react";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
// import { UserContext } from "../context/user";

const Cart = () => {
  let user = false;
  const { cart, total } = React.useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="cart-items cart-section">
      <h2>your cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>total : ${total}</h2>
      {user ? (
        <Link to="/checkout" className="btn btn-single-product">
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-single-product">
          login
        </Link>
      )}
    </section>
  );
};

export default Cart;
