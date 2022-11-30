import { publicRequest } from "../data/requestMethod";
import { loginFailure, loginStart, loginSucces } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSucces(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
