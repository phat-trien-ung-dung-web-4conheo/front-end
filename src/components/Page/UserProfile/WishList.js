import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteProduct } from "../../../redux/wishListSlice";

const WishList = () => {
  const currentUser = useSelector((state) => state.user.login.currentUser);
  const wishList = useSelector((state) => state.wishList);
  console.log(wishList.userId);
  const laptop = useMediaQuery("(min-width: 1024px)");
  const dispatch = useDispatch();
  const handleRemoveProduct = (item) => {
    dispatch(removeFavoriteProduct(item));
  };
  return (
    <Grid container spacing={4}>
      {currentUser._id === wishList?.userId &&
        wishList?.products?.map((item) => (
          <Grid item xs={laptop ? 3 : 6} key={item._id} className="">
            <div className="!relative">
              <img className="" src={item.img} />
              <IconButton
                onClick={() => handleRemoveProduct(item)}
                aria-label="delete"
                style={{ color: "#f44336" }}
                className="!absolute bottom-0 !left-1/2 !-translate-x-1/2 right-0"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Grid>
        ))}
    </Grid>
  );
};

export default WishList;
