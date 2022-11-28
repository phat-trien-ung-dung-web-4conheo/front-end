import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../Input/Input';
import { Button } from '@mui/material';

const  Wrap = styled.div`
    background-image: url(https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1255,c_limit/30afe174-1232-4fa5-8bd2-c8d5c4140ea7/nike-just-do-it.jpg);
    background-repeat:no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:center;
    z-index:999;
`
const LoginFormWrap = styled.div`
    
    width: 90%;
    height: 70%;
    background-color: #ffdb00;
    border-radius: 30px;
    max-width: 1350px;
    display:flex;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`
const LogoWrap = styled.div`
    height: 100%;
    width: 100%;
`
const Logo = styled.img`
    width: 100%;
    height: 100%;
`
const ItemWrap = styled.div`
    height: 100%;
    width: 100%;
    padding:16px;
    display: flex;
    flex-direction: column;
`
const AdminWrap = styled.div`
    height: 100%;
    width: 100%;
`
const Heading = styled.div`
    padding:16px;
    height:40%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
`
const InputWrap = styled.div`
    display:flex;
    flex-direction:column;
`

const AdminLogin = () => {
    const [showPass, setShowPass] = useState(false);
    const handleShowPass = (showPass) =>{
        showPass? setShowPass(false) : setShowPass(true);
    }
    return (
        <Wrap>
            <LoginFormWrap>

                <LogoWrap>
                    <ItemWrap>
                        <Logo src="/assets/images/admin_login_page.svg"></Logo>
                        
                    </ItemWrap>
                </LogoWrap>   

                <AdminWrap>
                    <ItemWrap>
                        <Heading>
                            <img style={{height:"50%", width:"50%"}} src="/assets/images/admin_login_logo.svg"></img>
                        </Heading>
                        <Input placeholder='Email' label='Email' name="input__admin" type='text'></Input>
                        <div style={{
                            display: "inline-block",
                        }}>
                            <Input placeholder='Password' label='Password' name="input__admin-password" type={`${showPass? "text":"password"}`} ></Input>
                            <button onClick={()=> handleShowPass(showPass)} className='showpass'>icon</button>
                        </div>
                        
                        <div style={{
                            width:"100%",
                            textAlign:"center",
                        }}>
                            <Button
                                    style={{
                                    width: "35%",
                                    
                                    fontSize: 16,
                                    backgroundColor: "#fff",
                                    textTransform: "capitalize",
                                    fontWeight: "normal",
                                    color: "black",
                                    }}
                                    variant="contained"
                                    disableElevation
                                >
                                Login
                            </Button>
                        </div>
                    </ItemWrap>
                </AdminWrap>
            </LoginFormWrap>
        </Wrap>
    );
};

export default AdminLogin;