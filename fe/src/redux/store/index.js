import orderReducer from "./slices/order";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
