import { publicRequest } from "../data/requestMethod";
import {
  addProduct,
  getProduct,
  removeAllProduct,
  removeProduct,
} from "./cartSlice";
import { addOrder } from "./orderSlice";
import { loginFailure, loginStart, loginSucces } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    await dispatch(loginSucces(res.data));
    //Send userid after login to addproduct function for get product in cart with each userId similar in database
    await dispatch(addProduct(res.data));
  } catch (err) {
    dispatch(loginFailure());
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
