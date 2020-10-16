import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { CartContext } from "../../context/cart";

const CartItem = ({ amount, id, image, price, title }) => {
  // cart context
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(
    CartContext
  );
  return (
    <article className="cart-item">
      <img
        className="cart-img"
        style={{ width: "140px" }}
        src={image}
        alt={title}
      />
      <div className="cart-text-box">
        <h4 className="cart-text-title">{title}</h4>
        <h5>${price}</h5>
        <button
          type="button"
          className="remove-btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          remove
        </button>
      </div>
      <div className="cart-amount-section">
        <div className="cart-amount-box">
          <button
            className="amount-btn"
            type="button"
            onClick={() => {
              increaseAmount(id);
            }}
          >
            <BsChevronUp />
          </button>
          <p>{amount}</p>
          <button
            className="amount-btn"
            type="button"
            onClick={() => {
              decreaseAmount(id, amount);
            }}
          >
            <BsChevronDown />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
