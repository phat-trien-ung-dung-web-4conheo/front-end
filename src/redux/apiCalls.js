import axios from "axios";
import { publicRequest } from "../data/requestMethod";
import {
  addProduct,
  getProduct,
  removeAllProduct,
  removeProduct,
} from "./cartSlice";
import { addOrder } from "./orderSlice";

import {
  loginFailure,
  loginStart,
  loginSucces,
  registerFailure,
  registerStart,
  registerSucces,
  updateUser,
} from "./userSlice";

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    await dispatch(loginSucces(res.data));
    //Send userid after login to addproduct function for get product in cart with each userId similar in database
    navigate("/");
    await dispatch(addProduct(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("auth/register", user);
    dispatch(registerSucces(res.data));
    navigate("/sign-in");
  } catch (error) {
    console.log(error);
    dispatch(registerFailure());
    navigate("/sign-up");
  }
};
export const updateUserMethod = async (
  user,
  dispatch,
  updateUserInfo,
  navigate
) => {
  try {
    const res = await publicRequest.put("/users/" + user._id, updateUserInfo, {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    console.log(res.data);
    console.log(user._id);
    dispatch(updateUser(updateUserInfo));
  } catch (err) {
    console.log("updateUser fail", err);
  }
};
export const addProductToCart = async (dispatch, product, user) => {
  try {
    const res = await publicRequest.post(
      "/carts/",
      //Add product to database
      {
        products: [
          {
            productId: product._id,
            quantity: product.quantity,
            ...product,
          },
        ],
        userId: user._id,
      },
      {
        headers: {
          token: "Bearer " + user.accessToken,
        },
      }
    );
    console.log("add product", res.data);
    await dispatch(addProduct(res.data));
  } catch (err) {
    console.log("cart", err);
  }
};

export const deleteCart = async (dispatch, user, cartId) => {
  try {
    const res = await publicRequest.delete("/carts/" + cartId, {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    console.log("deleted", res.data);
    dispatch(removeProduct(cartId));
  } catch (err) {
    console.log("cart", err);
  }
};

export const addOrderForUser = async (
  dispatch,
  user,
  products,
  total,
  cardInformation,
  userInformation
) => {
  console.log("user.accessToken", cardInformation);
  try {
    const res = await publicRequest.post(
      "/orders/",

      {
        products: [...products],
        userId: user._id,
        totalPrice: total,
        amount: products.length,
        phone: userInformation.phone,
        address: userInformation.address,
        email: userInformation.email,
        creditCard: cardInformation,
      },
      {
        headers: {
          token: "Bearer " + user.accessToken,
        },
      }
    );
    console.log("add order", res.data);
    await dispatch(addOrder(res.data));
    // await dispatch(deleteAllCart(res.data));
  } catch (err) {
    console.log("cart", err);
  }
};

export const deleteAllCart = async (dispatch, user) => {
  try {
    const res = await publicRequest.delete("/carts/deleteAll/" + user._id, {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    console.log("deleted 109", res.data);
    dispatch(removeAllProduct(user._id));
  } catch (err) {
    console.log("cart", err);
  }
};

export const searchItem = async (dispatch, search) => {
  try {
    const res = await publicRequest.get("/products/search/" + search);
    console.log("search", res.data);
    dispatch(getProduct(res.data));
  } catch (err) {
    console.log("cart", err);
  }
};
