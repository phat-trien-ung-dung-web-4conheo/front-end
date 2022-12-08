import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import AuthenticationLayout from "./AuthenticationLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//YUP VALIDATION
const schema = yup.object({
  fullname: yup.string().required("Fullname is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  age: yup.string().required("Age is required").nullable(),
  phonenumber: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
});

const Title = styled.h1`
  font-size: 24px;
`;
const Container = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;
const Or = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;
const BoxInput = {
  color: "black",
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "10px",
  marginTop: "5px",
  border: "1px solid rgb(202, 198, 218)",
  width: "100%",
};
const formWrap = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  gap: "10px",
};
const SignUpPage = () => {
  //FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const isSignUp = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (value) => {
    const newUser = {
      fullname: value.fullname,
      email: value.email,
      password: value.password,
      age: value.age,
      phoneNumb: value.phonenumber,
      address: value.address,
    };
    register(newUser, dispatch, navigate);
  };

  return (
    <form action="" onSubmit={handleSubmit(handleRegister)}>
      <AuthenticationLayout>
        <Title onClick={() => isSignUp("/")} className="cursor-pointer">
          Ovion
        </Title>
        <Container>
          <span style={{ marginBottom: "10px" }}>Username</span>
          <input
            style={BoxInput}
            label="Full name"
            id="fullname"
            placeholder="Enter your fullname"
            {...register("fullname")}
          ></input>
          {errors.fullname?.message && (
            <p className="text-left text-red-500">{errors.fullname?.message}</p>
          )}
          <span style={{ marginBottom: "10px" }}>Gmail</span>
          <input
            style={BoxInput}
            label="Gmail"
            id="email"
            placeholder="Enter your gmail"
            {...register("email")}
          ></input>
          {errors.email?.message && (
            <p className="text-left text-red-500">{errors.email?.message}</p>
          )}
          <span style={{ marginBottom: "10px" }}>Password</span>
          <input
            style={BoxInput}
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          ></input>
          {errors.password?.message && (
            <p className="text-left text-red-500">{errors.password?.message}</p>
          )}
          <div style={formWrap}>
            <div style={{ flexGrow: "2" }}>
              <span style={{ marginBottom: "10px" }}>Phone Number</span>
              <input
                style={BoxInput}
                placeholder="Enter your Phone Number"
                {...register("phonenumber")}
              ></input>
              {errors.phonenumber?.message && (
                <p className="text-left text-red-500">
                  {errors.phonenumber?.message}
                </p>
              )}
            </div>
            <div style={{ flexGrow: "1" }}>
              <span style={{ marginBottom: "10px" }}>Age</span>
              <input
                style={BoxInput}
                placeholder="Enter your Age"
                {...register("age")}
              ></input>
              {errors.age?.message && (
                <p className="text-left text-red-500">{errors.age?.message}</p>
              )}
            </div>
          </div>
          <span style={{ marginBottom: "10px" }}>Address</span>
          <input
            style={BoxInput}
            placeholder="Enter your Address"
            {...register("address")}
          ></input>
          {errors.address?.message && (
            <p className="text-left text-red-500">{errors.address?.message}</p>
          )}
        </Container>
        <Button
          style={{
            fontSize: 16,
            backgroundColor: "#ffdb00",
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "black",
            width: "100%",
          }}
          type="submit"
          variant="contained"
          disableElevation
        >
          Sign up
        </Button>
        <div class="flex items-center mt-6 justify-between w-full">
          <span className="border-b-[0.5px] border-black w-[45%]"></span>
          <span>or</span>
          <span className="border-b-[0.5px] border-black w-[45%]"></span>
        </div>
        <p class="text-h6 mt-6 text-center text-border_dark font-normal">
          Already a member? &nbsp;
          <span
            style={{ cursor: "pointer" }}
            onClick={() => isSignUp("/sign-in")}
          >
            <u class="text-dark_primary laptop:text-light_grey">Sign in</u>
          </span>
        </p>
      </AuthenticationLayout>
    </form>
  );
};

export default SignUpPage;
