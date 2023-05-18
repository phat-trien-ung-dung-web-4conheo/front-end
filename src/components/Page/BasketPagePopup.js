import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { removeProduct } from "../../redux/cartSlice";
import { deleteCart } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding-top: 50px;
  margin: 0 auto;
  margin-top: auto;
  transform: ${(props) =>
    props.isAppear ? "translateY(0)" : "translateY(100%)"};
  transition: transform 0.5s ease;
  height: 85vh;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.9) 0px 2px 12px 0px;
  background-color: rgba(255, 255, 255, 0.8);

  backdrop-filter: blur(10px);
  z-index: 999;
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
const BasketDesc = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 10px;
`;
const Size = styled.div``;
const BasketPagePopup = ({
  onClick = () => {},
  isAppear = false,
  className = "",
}) => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.login.currentUser);
  console.log("🚀 ~ file: BasketPagePopup.js:66 ~ cart", cart);
  const dispatch = useDispatch();
  const handleRemoveProduct = (item) => {
    deleteCart(dispatch, currentUser, item.cartId);
  };
  const navigate = useNavigate();
  // localStorage.clear();
  return (
    <Container className={className} isAppear={isAppear} onClick={onClick}>
      <Box sx={{ my: 3, mx: 2 }}>
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
          <Grid item>
            <Typography color="text.primary" variant="body1">
              Total
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider variant="middle" />

      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        className={`h-[250px] overflow-y-auto ${
          cart.products.length === 0 ? "flex" : ""
        }`}
      >
        {/* Check the id of current user is equal to cart userId */}
        {cart?.products?.length ? (
          cart?.products?.map(
            (item, idx) =>
              currentUser?._id === item?.userId && (
                <ListItem
                  key={idx}
                  className="!justify-between"
                  alignItems="flex-start"
                >
                  <div className="flex gap-2">
                    <Link href="" target="_blank">
                      <img
                        src={item?.img}
                        style={{ width: "110px", height: "134px" }}
                        alt=""
                      />
                    </Link>
                    <ListItemText
                      sx={{ display: "inline-block", margin: "10px" }}
                      className="font-bold max-w-[400px]"
                      primaryTypographyProps={{ fontWeight: "bold" }}
                      primary={item.title}
                      secondary={
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <BasketDesc>{item.desc}</BasketDesc>
                          <p>
                            <span className="font-semibold">Price: </span>
                            {item.price}$
                          </p>
                          <Color
                            className={`border`}
                            style={{ backgroundColor: `${item.color}` }}
                          ></Color>
                          <Size className="laptop:mt-2">
                            <span className="font-semibold">Size: </span>
                            {item?.size}
                          </Size>
                        </Typography>
                      }
                    />
                  </div>
                  <Grid
                    item
                    xs={4}
                    className="!justify-center"
                    container
                    spacing={1}
                  >
                    <Box
                      sx={{ "& > :not(style)": { m: 1 } }}
                      style={{ marginTop: "30px", display: "flex" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "row",
                          cursor: "pointer",
                          border: "1px solid black",
                          padding: "10px 30px",
                          borderRadius: "10% 10% 10%",
                        }}
                      >
                        <span className="quan-bar__text">{item.quantity}</span>
                      </div>
                      <IconButton
                        onClick={() => handleRemoveProduct(item)}
                        aria-label="delete"
                        style={{ color: "#f44336" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={8} style={{ marginTop: "40px" }}>
                    <Typography
                      className="text-end w-[70px]"
                      color="text.primary"
                      variant="body1"
                    >
                      {item.price}$
                    </Typography>
                  </Grid>
                </ListItem>
              )
          )
        ) : (
          <div className="p-5 m-auto">Your cart is empty</div>
        )}
      </List>
      <Divider variant="middle" />

      <div className="flex flex-row-reverse my-4">
        <p
          style={{
            color: "black",
            fontSize: "16px",
            display: "inline-block",
            marginRight: "15px",
          }}
        >
          Subtotal &nbsp;
          <span style={{ display: "inline-block", fontSize: "25px" }}>
            {currentUser?._id === cart?.userId ? cart.total : 0}$
          </span>
        </p>
      </div>
      <div className="flex flex-row-reverse">
        <p style={{ color: "black", fontSize: "20px", marginRight: "15px" }}>
          Taxes and shipping are calculated at checkout
        </p>
      </div>
      <Button
        content="Checkout"
        className="block rounded-lg px-5 py-4 bg-primary ml-auto"
        handleClick={() => navigate("/user/checkout")}
      ></Button>
    </Container>
  );
};

export default BasketPagePopup;
