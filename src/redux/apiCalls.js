import { publicRequest } from "../data/requestMethod";
import { addProduct, getProduct, removeProduct } from "./cartSlice";
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
