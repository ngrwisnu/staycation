const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  duration: 1,
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOrder(state, action) {
      return action.payload;
    },
  },
});

export const { updateOrder } = orderSlice.actions;

export default orderSlice.reducer;
