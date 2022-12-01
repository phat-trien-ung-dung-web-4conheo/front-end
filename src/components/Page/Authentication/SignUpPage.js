import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import Input from "../../Input/Input";
import AuthenticationLayout from "./AuthenticationLayout";
import { useNavigate } from "react-router-dom";
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
const SignUpPage = () => {
  const isSignUp = useNavigate();
  return (
    <AuthenticationLayout>
      <Title>Sign up</Title>
      <Container>
        <Input
          label="Full name"
          name="fullname"
          id="fullname"
          placeholder="Enter your fullname"
        ></Input>
        <Input
          label="Gmail"
          name="email"
          id="email"
          placeholder="Enter your gmail"
        ></Input>
        <Input
          label="Password"
          name="password"
          id="password"
          placeholder="Enter your password"
        ></Input>
      </Container>
      <Button
        className="w-full p-3 rounded-lg "
        content="Sign up"
        backgroundColor="#ffdb00"
      ></Button>
      <div class="flex items-center mt-6 justify-between w-full">
        <span className="border-b-[0.5px] border-black w-[45%]"></span>
        <span>or</span>
        <span className="border-b-[0.5px] border-black w-[45%]"></span>
      </div>
      <p class="text-h6 mt-6 text-center text-border_dark font-normal">
        Already a member? &nbsp;
        <span style={{cursor:"pointer"}} onClick={()=>isSignUp("/sign-in")}>
          <u class="text-dark_primary laptop:text-light_grey">Sign in</u>
        </span>
      </p>
    </AuthenticationLayout>
  );
};

export default SignUpPage;
