import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

const CartLink = () => {
  const { cartItems } = React.useContext(CartContext);
  return (
    <li className="cart-link-section">
      <div className="icon-box">
        <FiShoppingCart className="icon" size="1em" />
      </div>
      {cartItems > 0 ? (
        <div className="cart-linktotal">
          <div>{cartItems}</div>
        </div>
      ) : (
        ""
      )}
      <Link to="/cart">Cart</Link>
    </li>
  );
};

export default CartLink;
