import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { textAlign } from "@mui/system";


const Container = styled.div`
  padding-top: 50px;
  max-width: 1200px;
  margin: 0 auto;
`;
const Left = styled.div`
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Right = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const BasketPage = () => {
  return (
    <Container>
      <Box sx={{ my:3, mx:2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Your shopping cart 
        </Typography>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography color="text.primary" variant="body1">
              Product
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography color="text.primary" variant="body1">
              Quantity
            </Typography>
          </Grid>
          <Grid item >
            <Typography color="text.primary" variant="body1">
              Total
            </Typography>
          </Grid>
        </Grid>
      </Box>
      
      <Divider variant="middle" />

      <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <div id="image" style={{ display: "inline" }}>
            <Link href="" target="_blank">
              <img 
                src={"https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2FCB05cLCWbOvaUaHK9lyO%2F0?alt=media&token=4b932fd8-c0d7-4a1c-be41-7f3a6e3e2abd"} 
                style={{ width: "110px", height: "134px" }} 
                alt="" />
            </Link>
          </div>
          <ListItemText sx={{ display: 'inline-block', margin:'10px' }}
            primary="CERAMIC HOOK"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant= "body2"
                  color="text.primary">
                  Metallic wall hook with two ceramic knob hooks.
                  <p> $9.9</p>
                </Typography>
              </React.Fragment>
            }
          />
          <Grid item xs={4} container spacing={1} >
            <Box sx={{ '& > :not(style)': { m: 1 } }} style={{marginTop:"30px"}}>
            <div style={{display: "flex", justifyContent:"space-between", flexDirection:"row", cursor:"pointer", border: "1px solid black", padding: "10px 30px",borderRadius: "10% 10% 10%"}}>
              <div class="quan-bar__btn">-</div>
              <span class="quan-bar__text">1</span>
              <div class="quan-bar__btn">+</div>
            </div>
              <IconButton aria-label="delete" style={{color: "#f44336"}}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={8} style={{marginTop:"40px"}}>
            <Typography color="text.primary" variant="body1">
            $9.90
            </Typography>
          </Grid>
        </ListItem>
        
      </List>

    <div> 
      
    </div>


      <Divider variant="middle"  />

      <div class="flex flex-row-reverse my-4" >
        <p style={{color:"black",fontSize: "16px", display: "inline-block", marginRight: "15px"}}>
          Subtotal &nbsp; 
          <span style={{display: "inline-block", fontSize: "25px"}}>
            $9.90
          </span>
        </p>
      </div>
      <div class="flex flex-row-reverse">
        <p style={{color:"black",fontSize: "20px", marginRight: "15px"}}>
          Taxes and shipping are calculated at checkout
        </p>
      </div>
      <div style={{textAlign: "end", paddingTop: "20px"}}>
      <Fab variant="extended" color="secondary" style={{color:"black", backgroundColor:"yellow", marginRight: "15px"}} >
        Go to checkout
      </Fab>
      </div>
    </Container>
  );
};

export default BasketPage;
