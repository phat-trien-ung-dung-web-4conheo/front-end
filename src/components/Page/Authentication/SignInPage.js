import React, { useState } from "react";
import styled from "styled-components";
import AuthenticationLayout from "./AuthenticationLayout";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GoogleIcon from "@mui/icons-material/Google";
import { shouldSkipGeneratingVar } from "@mui/material";
import { login } from "../../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../redux/cartSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

//YUP VALIDATION
const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Container = styled.div`
  margin: 0px;
  text-align: center;
`;
const BoxInput = {
  color: "black",
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "10px",
  border: "1px solid rgb(202, 198, 218)",
};
const ForgotPassword = {
  color: "white",
  textAlign: "left",
};
const SignInPage = () => {
  // GET CURRENT USER
  const currentUser = useSelector((state) => state.user.login.currentUser);
  //FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //Sign In
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //CHANGE USERID FOR CART AFTER SIGN IN
  const handleClick = (value) => {
    const user = {
      email: value.email,
      password: value.password,
    };
    login(dispatch, user, navigate);
  };
  const isSignUp = useNavigate();
  return (
    <form action="" onSubmit={handleSubmit(handleClick)}>
      <AuthenticationLayout>
        <Container>
          <Stack spacing={2} sx={{ width: 300 }}>
            <h1
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => isSignUp("/")}
            >
              {" "}
              Ovion{" "}
            </h1>
            <Stack>
              <input
                style={BoxInput}
                type="email"
                placeholder="Enter your email"
                id="email"
                {...register("email")}
              ></input>
              {errors.email?.message && (
                <p className="text-left text-red-500">
                  {errors.email?.message}
                </p>
              )}
              <input
                style={BoxInput}
                type="password"
                placeholder="Enter your password"
                id="password"
                className="block mt-2"
                {...register("password")}
              ></input>
              {errors.password?.message && (
                <p className="text-left text-red-500">
                  {errors.password?.message}
                </p>
              )}
            </Stack>

            <a
              style={ForgotPassword}
              id="forgot"
              href=" https://widgetbox.app/"
            >
              Forgot password
            </a>
            <Button
              style={{
                fontSize: 16,
                backgroundColor: "#ffdb00",
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "black",
              }}
              type="submit"
              variant="contained"
              disableElevation
            >
              Sign in
            </Button>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{ flex: 1, height: "1px", backgroundColor: "white" }}
              />
              <div>
                <p style={{ width: "30px", textAlign: "center" }}>or</p>
              </div>
              <div
                style={{ flex: 1, height: "1px", backgroundColor: "white" }}
              />
            </div>

            <Button
              style={{ backgroundColor: "white" }}
              variant="contained"
              disableElevation
            >
              <div
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <GoogleIcon style={{ color: "black" }} />
                <h2
                  style={{
                    fontSize: 16,
                    color: "#2a254b",
                    textTransform: "capitalize",
                  }}
                >
                  Sign in with Google
                </h2>
              </div>
            </Button>

            <h2>
              Don't have an account?
              <u>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => isSignUp("/sign-up")}
                >
                  {" "}
                  Sign up
                </span>
              </u>
            </h2>
          </Stack>
        </Container>
      </AuthenticationLayout>
    </form>
  );
};

export default SignInPage;
