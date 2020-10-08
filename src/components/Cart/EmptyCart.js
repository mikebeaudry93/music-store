import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="empty-cart">
      <h2 className="cart-section-title">Empty Cart...</h2>
      <Link to="/" className="btn btn-single-product btn-block">
        Home page
      </Link>
    </section>
  );
};

export default EmptyCart;
