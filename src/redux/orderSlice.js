import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    address: "",
    phone: "",
    userId: null,
  },
  reducers: {
    addOrder: (state, action) => {
      console.log("ok", action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
