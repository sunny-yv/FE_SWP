export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_CART_QUANTITY = "CHANGE_CART_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const tang = "tang";
export const giam = "giam";

const addToCart = (cart, product) => {
  const clone = [...cart];
  const index = cart.findIndex((item) => item.drinkID === product.drinkID);
  if (index > -1) {
    const updatedItem = { ...cart[index], qty: +cart[index].qty + 1 };
    clone[index] = updatedItem;
  } else clone.push({ ...product, qty: 1 });
  return clone;
};
const change_qty = (cart, payload) => {
  console.log(payload);
  const clone = [...cart];
  const index = cart.findIndex((item) => item.drinkID === payload.drinkID);
  if (tang === payload.event) {
    clone[index].qty = clone[index].qty + 1;
  } else {
    if (clone[index].qty === 1) clone.splice(index, 1);
    else clone[index].qty = clone[index].qty - 1;
  }
  return clone;
};
export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: addToCart(state.cart, action.payload),
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.drinkID),
      };
    }
    case CHANGE_CART_QUANTITY:
      return {
        ...state,
        cart: change_qty(state.cart, action.payload),
      };
    default:
      return state;
  }
};
