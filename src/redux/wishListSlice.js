import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    products: [],
    userId: null,
  },
  reducers: {
    addFavoriteProduct: (state, action) => {
      //ASSIGN USER ID TO STATE WHEN LOGIN
      if (action.payload.accessToken) {
        state.userId = action.payload._id;
      } else {
        //CHECK IF PRODUCT IS ALREADY EXISTED
        const isExist = state.products.find(
          (product) =>
            product._id === action.payload._id &&
            state.userId === action.payload.userId
        );
        if (isExist) {
          toast.error("You are already added this product in your wishlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return state;
        }
        const getWishProduct = action.payload;
        state.products.push(getWishProduct);
        toast.success("Add your favorite product successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("action.payload 15", action.payload);
      }
    },
    removeFavoriteProduct: (state, action) => {
      const removeWishProduct = action.payload;
      if (removeWishProduct.userId === state.userId) {
        state.products = state.products.filter(
          (product) => product._id !== removeWishProduct._id
        );
      }
    },
  },
});

export const { addFavoriteProduct, removeFavoriteProduct } =
  wishListSlice.actions;
export default wishListSlice.reducer;
