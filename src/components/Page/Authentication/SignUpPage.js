import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Input from "../../Input/Input";
import AuthenticationLayout from "./AuthenticationLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../../redux/apiCalls";


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
  marginTop:"5px",
  border: "1px solid rgb(202, 198, 218)",
  width:"100%",
};
const formWrap = {
  display:"flex",
  justifyContent:"center",
  width:"100%",
  gap:"10px"
}
const SignUpPage = () => {
  const isSignUp = useNavigate();
  const [email, setEmail] =  useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [phoneNumb, setPhoneNumb] = useState("");
  const [address, setAddress] = useState(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e)=>{
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      username: username,
      age: age,
      phoneNumb: phoneNumb,
      address: address,
    };
    console.log("send...");
    register(newUser, dispatch, navigate)
  
  }
  



  return (
    <AuthenticationLayout>
      <Title onClick={() => isSignUp("/")} className="cursor-pointer">
        Ovion
      </Title>
      <Container>
        <span style={{marginBottom:"10px"}}>Username</span>
        <input
          style={BoxInput}
          label="Full name"
          name="fullname"
          id="fullname"
          placeholder="Enter your fullname"
          onChange = {(e) => setUsername(e.target.value)}
        ></input>
        <span style={{marginBottom:"10px"}}>Gmail</span>
        <input
          style={BoxInput}
          label="Gmail"
          name="email"
          id="email"
          placeholder="Enter your gmail"
          onChange = {(e) => setEmail(e.target.value)}
        >
        </input>
        <span style={{marginBottom:"10px"}}>Password</span>
        <input
          style={BoxInput}
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange = {(e) => setPassword(e.target.value)}
        ></input>
        <div style={formWrap}>
            <div style={{flexGrow:"2"}}>
              <span style={{marginBottom:"10px"}}>Phone Number</span>
              <input
                style={BoxInput}
                label="Password"
                name="password"
                id="password"
                placeholder="Enter your Phone Number"
                onChange = {(e) => setPhoneNumb(e.target.value)}
              ></input>
            </div>
            <div style={{flexGrow:"1"}}>
              <span style={{marginBottom:"10px"}}>Age</span>
              <input
                style={BoxInput}
                label="Password"
                name="password"
                id="password"
                placeholder="Enter your Age"
                onChange = {(e) => setAge(e.target.value)}
              ></input>
            </div>
        </div>
          <span style={{marginBottom:"10px"}}>Address</span>
          <input
            style={BoxInput}
            label="Password"
            name="password"
            id="password"
            placeholder="Enter your Address"
            onChange = {(e) => setAddress(e.target.value)}
          ></input>
      </Container>
      <Button
            style={{
              fontSize: 16,
              backgroundColor: "#ffdb00",
              textTransform: "capitalize",
              fontWeight: "bold",
              color: "black",
              width: "100%"
            }}
            onClick={handleRegister}
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
  );
};

export default SignUpPage;
