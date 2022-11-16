import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
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
                        defaultValue="...."
                        style={{width:"70%"}}
                        />
                        <TextField
                        id="outlined-uncontrolled"
                        label="Age"
                        defaultValue="...."
                        style={{width:"30%"}}
                        />     
                    </UserField>
                    <UserField>
                        <TextField
                        id="outlined-uncontrolled"
                        label="Email"
                        defaultValue="...."
                        style={{width:"100%"}}
                        />  
                    </UserField>
                    <UserField>
                        <TextField
                        id="outlined-uncontrolled"
                        label="Address"
                        defaultValue="...."
                        style={{width:"100%"}}
                        />           
                    </UserField>
                    <UserField>
                        <TextField
                        id="outlined-uncontrolled"
                        label="Phone Number"
                        defaultValue="...."
                        style={{width:"100%"}}
                        />           
                    </UserField>
                </FieldCol>
            </UserWrap>
            <div style={{display:'flex',justifyContent:"flex-end",marginTop:"20px"}}>
                <Button variant="contained">Save me</Button>
            </div>
        </div>

    );
};

export default UserInfo;