import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/order";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
