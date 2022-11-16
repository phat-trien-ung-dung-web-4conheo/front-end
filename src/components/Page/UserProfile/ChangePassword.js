import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Heading = styled.h3`
    font-size:48px;
    color: black;
    text-align:center;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom:50px;
`
const FieldWrap = styled.div`
    margin-left:20%;
`
const ChangePassword = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      const handleClickShowPassword = () => {
          setValues({
            ...values,
            showPassword: !values.showPassword,
          });
        };
        const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
          };
      const handleMouseDownPassword = (event) => {
          event.preventDefault();
      };
    return (
        <div>
            <Heading>Change Password</Heading>
            <FieldWrap>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:"70%"}}>
                    <InputLabel htmlFor="outlined-adornment-password" >Current Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    </InputAdornment>
                            }
                        label="Password"
                    />
                </FormControl>
            </FieldWrap>
            <FieldWrap>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:"70%"}}>
                    <InputLabel htmlFor="outlined-adornment-password" > New Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    </InputAdornment>
                            }
                        label="Password"
                    />
                </FormControl>
            </FieldWrap>        
            <div style={{display:'flex',justifyContent:"flex-end",marginTop:"20px", width:"77%"}}>
                <Button variant="contained">Save me</Button>
            </div>        
        </div>
    );
};

export default ChangePassword;