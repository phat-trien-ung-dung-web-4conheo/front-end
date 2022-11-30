import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      if (
        state.products.find(
          (item) =>
            item._id === action.payload._id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
        )
      ) {
        state.products = state.products.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + action.payload.price,
            };
          } else {
            return item;
          }
        });
        state.total += action.payload.price * action.payload.quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter(
        (product) => product._id !== action.payload.id
      );
      state.products = state.products.map((item) => {
        if (item._id === action.payload.id) {
          state.total -= action.payload.price * item.quantity;
          console.log(state.total);
          return {
            ...item,
            quantity: item.quantity - 1,
            price: item.price - action.payload.price,
          };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
