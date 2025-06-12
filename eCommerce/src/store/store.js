import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import alertReducer from "../features/alertSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    alert: alertReducer,
  },
});

export default store;
