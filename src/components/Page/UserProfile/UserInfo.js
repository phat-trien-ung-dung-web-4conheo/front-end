import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserMethod } from "../../../redux/apiCalls";
import { logout } from '../../../redux/userSlice';
const Heading = styled.h3`
    font-size:48px;
    color: black;
    text-align:center;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom:50px;
`
const UserWrap = styled.div`
    display:flex;
    flex-direction:row;
    gap:50px;
`
const UserField = styled.div`
    width: 100%;
    display:flex;
    flex-direction:row;
    gap:5px;
`
const FieldCol = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    gap:30px;
`
const UserAvatar = styled.div`
    width: 200px;
    height: 200px;
`
const UserInfo = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // CHANGE USER INFO

    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [phonenumb, setPhonenumb] = useState("");
    const [username, setUsername] = useState("");
    const [render, setRender] = useState(false);
    
    const handleClick = (e)=> {
        e.preventDefault();
        const updateInf = {
            age: age,
            phoneNumb: phonenumb,
            username: username,
            address: address,
        }
        console.log("sending");
        updateUserMethod(currentUser, dispatch, updateInf)
        setRender(!render);
        navigate("/")
    }
    // GET CURRENT USER
    const currentUser = useSelector((state) => state.user.login.currentUser);
    return (
        <div>
            <Heading>My Account</Heading>
            <UserWrap>
                <UserAvatar>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'></img>
                </UserAvatar>
                <FieldCol>
                    <UserField>
                        <TextField
                        id="outlined-uncontrolled"
                        label="Full Name"
                        placeholder = {currentUser.username}
                        style={{width:"70%"}}
                        onChange={(e) => setUsername(e.target.value)}
                        on
                        />
                        <TextField
                        id="outlined-uncontrolled"
                        label="Age"
                        placeholder = {currentUser.age}
                        style={{width:"30%"}}
                        onChange={(e) => setAge(e.target.value)}
                        />     
                    </UserField>
                    <UserField>
                        <TextField
                        id="outlined-uncontrolled"
                        label="Email"
                        disabled
                        defaultValue= {currentUser.email}
                        style={{width:"100%"}}
                        />  
                    </UserField>
                    <UserField>
                        <TextField
                        id="outlined-uncontrolled"
                        label="Address"
                        placeholder = {currentUser.address}
                        style={{width:"100%"}}
                        onChange={(e) => setAddress(e.target.value)}
                        />           
                    </UserField>
                    <UserField>
                        <TextField
                        id="outlined-uncontrolled"
                        label="Phone Number"
                        placeholder = {currentUser.phonenumb}
                        style={{width:"100%"}}
                        onChange={(e) => setPhonenumb(e.target.value)}
                        />           
                    </UserField>
                </FieldCol>
            </UserWrap>
            <div style={{display:'flex',justifyContent:"flex-end",marginTop:"20px"}}>
                <Button variant="contained" onClick={handleClick} >Save me</Button>
            </div>
        </div>

    );
};

export default UserInfo;