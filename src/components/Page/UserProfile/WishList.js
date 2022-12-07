import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const WishList = () => {
    const currentUser = useSelector((state) => state.user.login.currentUser)
    const wishList = useSelector((state) => state.wishList)
    console.log(wishList.products);
    const laptop = useMediaQuery("(min-width: 1024px)");
    return (
        <Grid container spacing={4}>
            {
                wishList?.products?.map((item) => 
                <Grid item xs={laptop ? 3 : 6} key={item._id}>

                    <img className='' src={item.img}/> 
                </Grid>
                )
            }
            
        </Grid>
    );
};

export default WishList;