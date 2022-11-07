import React from "react";
import styled from "styled-components";
import AuthenticationLayout from "./AuthenticationLayout";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';

const Container = styled.div`
margin: '0px',
font-size: 20px;
text-align: center;
`;
const BoxInput = {
  height: '40px',
  padding: '10px',
  borderRadius: '5px',
  margin: '5px',
  border: '1px',
  borderColor: "rgb(202, 198, 218)",
};
const ForgotPassword = {
  color: 'white',
  textAlign: 'left',
};
const SignInPage = () => {
  return (
    <AuthenticationLayout>
      
      <Container>
        <Stack spacing={2} sx={{ width: 300 }}>
          <h1 style={{fontSize: "30px"}}> Avion </h1>

            <input style={BoxInput} type="email" placeholder="Enter your email"></input>
            <input style={BoxInput} type="passworld" placeholder="Enter your passworld"></input>

          <a style={ForgotPassword} id="forgot" href=" https://widgetbox.app/">Forgot passworld</a>
          <Button style={{fontSize: 16, backgroundColor: "#2a254b", textTransform: "capitalize"}} variant="contained" disableElevation>
            Sign in
          </Button>

          <div
            style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
            >
              <div style={{flex: 1, height: '1px', backgroundColor: 'white'}} />
              <div>
                <p style={{width: '30px', textAlign: 'center'}}>or</p>
              </div>
              <div style={{flex: 1, height: '1px', backgroundColor: 'white'}} />
          </div>

          <Button style={{backgroundColor:"white"}} variant="contained" disableElevation>
            <div style={{
              flexDirection: 'row',
              alignItems: 'center', 
              display: 'flex', 
              gap: '10px',
              }}>
            <GoogleIcon style={{color:"black"}}/>
              <h2 style={{
                      fontSize: 16,
                      color: "#2a254b",
                      textTransform: "capitalize"
                  }}>Sign in with Google</h2>
              
            </div>  
          </Button>
          <h2>Don't have an account? 
          <u><a href=" https://widgetbox.app/" target="_blank"> Sign up</a></u>
          </h2>

        </Stack>
      </Container>
      
    </AuthenticationLayout>
  );
};

export default SignInPage;
