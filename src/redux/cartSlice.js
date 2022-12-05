import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { publicRequest } from "../data/requestMethod";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    userId: null,
  },
  reducers: {
    //Get products fromd cart model database
    getProduct: (state, action) => {
      state.products = action.payload;
      state.quantity = action.payload.length;
      state.total = action.payload.total;
    },

    addProduct: (state, action) => {
      //Change userId state whenever login
      if (action.payload.accessToken) {
        state.userId = action.payload._id;
        state.total = state.products
          .filter((item) => item.userId === action.payload._id)
          .reduce((total, item) => total + item.price, 0);
        state.quantity = state.products.filter(
          (item) => item.userId === action.payload._id
        ).length;
        console.log("state.total: ", state.total);
      } else {
        //FIND PRODUCT IN CART
        if (
          state.products.find(
            (item) =>
              item.userId === action.payload.userId &&
              item._id === action.payload.products[0]._id &&
              item.size === action.payload.products[0].size &&
              item.color === action.payload.products[0].color
          )
        ) {
          state.products = state.products.map((item) => {
            const getProductQuantity = action.payload.products[0].quantity;
            if (
              item._id === action.payload.products[0]._id &&
              item.size === action.payload.products[0].size &&
              item.color === action.payload.products[0].color &&
              item.userId === action.payload.userId
            ) {
              //UPDATE DATABASE
              return {
                ...item,
                quantity: getProductQuantity,
                price: action.payload.products[0].price * getProductQuantity,
              };
            } else {
              return item;
            }
          });
        } else {
          state.quantity += 1;
          const getProduct = action.payload.products[0];
          //Get userId and cartId to do more things
          getProduct.userId = action.payload.userId;
          getProduct.cartId = action.payload._id;
          getProduct.price = getProduct.price * getProduct.quantity;
          state.products.push(getProduct);
        }
        //GET TOTAL PRICE AND CHECK IF ID OF EACH USER IS VERIFIED
        state.total = state.products
          .filter((item) => item.userId === state.userId)
          .reduce((total, item) => total + item.price, 0);
      }
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.cartId === id);
      if (existingItem) {
        state.products = state.products.filter((item) => item.cartId !== id);
      }
      state.quantity -= 1;
      state.total = state.products
        .filter((item) => item.userId === state.userId)
        .reduce((total, item) => total + item.price, 0);
    },
  },
});

export const { addProduct, removeProduct, getProduct } = cartSlice.actions;
export default cartSlice.reducer;
