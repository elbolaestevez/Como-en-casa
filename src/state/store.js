import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./carrito";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    user: userReducer,
    carrito: carritoReducer
  },
});

export default store;
