import { createContext, useContext, useEffect, useReducer } from "react";
import { CartReducer } from "./reducer/cartReducer";

const Cart = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default CartProvider;
