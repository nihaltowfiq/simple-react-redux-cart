// const { createStore } = require("redux");
// const { default: cartReducers } = require("../reducers/cartReducers");
import { createStore } from "redux";
import cartReducers from "../reducers/cartReducers";

export const cartStore = createStore(cartReducers);
