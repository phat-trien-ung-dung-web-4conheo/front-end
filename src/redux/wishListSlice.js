import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    products: [],
    userId: null,
  },
  reducers: {
    addFavoriteProduct: (state, action) => {
      const getWishProduct = action.payload;
      state.products.push(getWishProduct);
      console.log("action.payload 15", action.payload);
    },
  },
});

export const { addFavoriteProduct } = wishListSlice.actions;
export default wishListSlice.reducer;
