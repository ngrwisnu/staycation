const { createSlice } = require("@reduxjs/toolkit");

const initialState = null;

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOrder(state, actions) {
      return actions.payload;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
