import React from "react";
import LocalCart from "../utils/localCart";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(LocalCart);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
