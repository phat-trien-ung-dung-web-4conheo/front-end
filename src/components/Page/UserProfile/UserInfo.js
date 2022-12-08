import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserMethod } from "../../../redux/apiCalls";
import { logout } from "../../../redux/userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//YUP VALIDATION
const schema = yup.object({
  username: yup.string().required("Username is required"),
  age: yup.string().required("Age is required"),
  phonenumber: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
});
const Heading = styled.h3`
  font-size: 48px;
  color: black;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-bottom: 50px;
`;
const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;
const UserField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const FieldCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const UserAvatar = styled.div`
  width: 200px;
  height: 200px;
`;
const UserInfo = () => {
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // CHANGE USER INFO

  const [render, setRender] = useState(false);

  const onSubmit = (value) => {
    console.log(value);
    // e.preventDefault();
    const updateInf = {
      age: value.age,
      phoneNumb: value.phonenumber,
      username: value.username,
      address: value.address,
    };
    console.log("sending");
    updateUserMethod(currentUser, dispatch, updateInf);
    setRender(!render);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading>My Account</Heading>
        <UserWrap>
          <UserAvatar>
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"></img>
          </UserAvatar>
          <FieldCol>
            <UserField className="!block laptop:!flex">
              <div className="flex flex-col gap-1 w-full laptop:w-[70%]">
                <TextField
                  id="outlined-uncontrolled"
                  label="Full Name"
                  placeholder={currentUser.username}
                  style={{ width: "100%" }}
                  {...register("username")}
                />
                {errors.username?.message && (
                  <p className="text-red-500">{errors.username?.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full laptop:w-[30%]">
                <TextField
                  id="outlined-uncontrolled"
                  label="Age"
                  placeholder={currentUser.age}
                  style={{ width: "100%" }}
                  {...register("age")}
                />
                {errors.age?.message && (
                  <p className="text-red-500">{errors.age?.message}</p>
                )}
              </div>
            </UserField>
            <UserField>
              <div className="flex flex-col gap-1 w-full">
                <TextField
                  id="outlined-uncontrolled"
                  label="Email"
                  disabled
                  defaultValue={currentUser.email}
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
              </div>
            </UserField>
            <UserField>
              <div className="flex flex-col gap-1 w-full">
                <TextField
                  id="outlined-uncontrolled"
                  label="Address"
                  placeholder={currentUser.address}
                  style={{ width: "100%" }}
                  {...register("address")}
                />
                {errors.address?.message && (
                  <p className="text-red-500">{errors.address?.message}</p>
                )}
              </div>
            </UserField>
            <UserField>
              <div className="flex flex-col gap-1 w-full">
                <TextField
                  id="outlined-uncontrolled"
                  label="Phone Number"
                  placeholder={currentUser.phonenumb}
                  style={{ width: "100%" }}
                  {...register("phonenumber")}
                />
                {errors.phonenumber?.message && (
                  <p className="text-red-500">{errors.phonenumber?.message}</p>
                )}
              </div>
            </UserField>
          </FieldCol>
        </UserWrap>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" type="submit">
            Save me
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
