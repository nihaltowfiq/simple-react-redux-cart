// import { ADD_TO_CART } from "../actions/cartActions";
// import REMOVE_FROM_CART from "../actions/cartActions";
import laptop from "../../img/laptop.jpg";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [
    { id: 1, name: "Apple Laptop", img: laptop },
    { id: 2, name: "Asus Laptop", img: laptop },
    { id: 3, name: "HP Laptop", img: laptop },
    { id: 4, name: "Dell Laptop", img: laptop },
    { id: 5, name: "Acer Laptop", img: laptop },
    { id: 6, name: "Toshiba Laptop", img: laptop },
    { id: 7, name: "Lenovo Laptop", img: laptop },
  ],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        cartId: state.cart.length + 1,
        productId: action.id,
        name: action.name,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    case REMOVE_FROM_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((item) => item.cartId !== id);
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};

export default cartReducers;
