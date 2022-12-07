import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
       isFetching: false,
       error: false,
       loginSucces: false,
    }
  },
  reducers: {
    //login
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSucces: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    //register
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSucces: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.loginSucces = true;
    },
    registerFailure: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.loginSucces = false;
    },
    logout: (state) => {
      state.login.currentUser = null;
    },
    updateUser: (state, action) => {
      const userId = state.login.currentUser._id;
      const userEmail = state.login.currentUser.email;
      const accessToken = state.login.currentUser.accessToken;
      state.login.currentUser = {...action.payload, _id: userId, email: userEmail, accessToken: accessToken};
      console.log(action.payload);
    }
  },
});

export const { 
  loginStart, loginSucces, loginFailure, logout,
  registerStart, registerSucces, registerFailure, updateUser
} =
  userSlice.actions;
export default userSlice.reducer;
