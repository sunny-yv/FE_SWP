export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_CART_QUANTITY = "CHANGE_CART_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const tang = "tang";
export const giam = "giam";

const transformedData = (item, quantity, amount) => {
  const price =
    item.drinkName !== null ? item.priceDrink : item.priceCatProduct;
  return {
    menuID: item.menuID,
    name: item.drinkName !== null ? item.drinkName : item.catProductName,
    price: price,
    image: item.drinkName !== null ? item.imageDrink : item.imageCatProduct,
    quantity: quantity,
    amount: amount ? amount : price,
  };
};

const addToCart = (cart, product) => {
  const clone = [...cart];
  const index = clone.findIndex((item) => item.menuID === product.menuID);
  if (index > -1) {
    const qty = +clone[index].quantity + 1;
    const updatedItem = transformedData(
      product,
      +qty,
      +clone[index].price * qty
    );
    clone[index] = updatedItem;
  } else clone.push(transformedData(product, 1));
  return clone;
};
const change_qty = (cart, payload) => {
  const clone = [...cart];
  const index = cart.findIndex((item) => item.menuID === payload.menuID);
  if (tang === payload.event) {
    const qty = clone[index].quantity + 1;
    clone[index].quantity = qty;
    clone[index].amount = qty * clone[index].price;
  } else {
    const qty = clone[index].quantity - 1;
    if (clone[index].quantity === 1) clone.splice(index, 1);
    else {
      clone[index].quantity = qty;
      clone[index].amount = qty * clone[index].price;
    }
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
        cart: [],
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
