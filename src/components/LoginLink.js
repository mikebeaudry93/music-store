import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";

const LoginLink = () => {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);

  if (user.token) {
    return (
      <Link
        to="/"
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        Logout
      </Link>
    );
  }

  return <Link to="/login">Login</Link>;
};

export default LoginLink;
