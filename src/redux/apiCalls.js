import axios from "axios";
import { publicRequest } from "../data/requestMethod";
import { loginFailure, loginStart, loginSucces, registerFailure, registerStart, registerSucces } from "./userSlice";

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSucces(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user, navigate ) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSucces(res.data));
    navigate("/sign-in");
  } catch (error) {
    dispatch(registerFailure());
  }
}