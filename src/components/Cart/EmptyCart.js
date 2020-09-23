import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="empty-cart">
      <h2 className="empty-cart-title">Empty Cart...</h2>
      <Link to="/" className="btn btn-single-product">
        Home page
      </Link>
    </section>
  );
};

export default EmptyCart;
