import { Grid, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
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
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { textAlign } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

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
const BasketPage = () => {
  const tablet = useMediaQuery("(min-width:768px)");
  const laptop = useMediaQuery("(min-width:1024px)");
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("🚀 ~ file: BasketPagePopup.js:66 ~ cart", cart);
  const dispatch = useDispatch();
  const handleRemoveProduct = (item) => {
    deleteCart(dispatch, currentUser, item.cartId);
  };
  const navigate = useNavigate();

  //automatic scroll to top when change page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Your shopping cart
        </Typography>
        {tablet && (
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
        )}
      </Box>

      <Divider variant="middle" />

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {cart.products.map(
          (item) =>
            currentUser?._id === item?.userId && (
              <ListItem
                className="!justify-between !block tablet:!flex"
                alignItems="flex-start"
              >
                <div className="flex gap-2">
                  <Link
                    href=""
                    target="_blank"
                    className="!flex-1 tablet:!flex-none w-[110px] h-[164px] "
                  >
                    <img
                      src={item.img}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                  </Link>
                  <ListItemText
                    sx={{ display: "inline-block", margin: "10px" }}
                    className="font-bold max-w-[400px] !flex-1 tablet:!flex-0"
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
                          {item.price}
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
                    style={{ display: "flex" }}
                    className="tablet:!flex mt-1 tablet:mt-[30px]"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        cursor: "pointer",
                        border: "1px solid black",
                        borderRadius: "10% 10% 10%",
                        alignItems: "center",
                      }}
                    >
                      <div className="quan-bar__btn p-3 px-4 ">-</div>
                      <span className="quan-bar__text p-1">
                        {item.quantity}
                      </span>
                      <div className="quan-bar__btn p-3 px-4">+</div>
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
                {tablet && (
                  <Grid item xs={8} className="mt-0 tablet:mt-[40px]">
                    <Typography
                      className="text-end w-[70px]"
                      color="text.primary"
                      variant="body1"
                    >
                      {item.price}
                    </Typography>
                  </Grid>
                )}
              </ListItem>
            )
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
            {currentUser?._id === cart?.userId ? cart.total : 0}
          </span>
        </p>
      </div>
      <div className="flex flex-row-reverse">
        <p style={{ color: "black", fontSize: "20px", marginRight: "15px" }}>
          Taxes and shipping are calculated at checkout
        </p>
      </div>
      <div style={{ textAlign: "end", paddingTop: "20px" }}>
        <Fab
          variant="extended"
          color="secondary"
          style={{
            color: "black",
            backgroundColor: "yellow",
            marginRight: "15px",
            zIndex: 0,
          }}
          onClick={() => navigate("/user/checkout")}
        >
          Go to checkout
        </Fab>
      </div>
    </Container>
  );
};

export default BasketPage;
