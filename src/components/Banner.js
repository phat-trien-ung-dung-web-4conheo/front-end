import React, { Component } from 'react';
import styled from 'styled-components';
import { BannerListItem } from '../data/data';
//https://thework.vn/wp-content/uploads/2021/05/Bi-quyet-kinh-doanh-giay-dep-online-hieu-qua-tren-facebook-0.jpg

const BannerWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:5%;
    padding:50px;
    background-image: url(http://cdn.tgdd.vn/Files/2022/04/01/1423481/huong-dan-order-giay-nike-o-nuoc-ngoai-cuc-de-202204012327161887.jpg);
    
`
const BannerContainer = styled.div`
    color:white;
    margin: 0 auto;
    background-color:#0006;
    font-weight: 700;
    border-radius: 20px;
    padding:10px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const BannerHeading = styled.h3`
    opacity:1;
    font-size:34px;
    margin: 5px;
    text-align: center;
`
const BannerText = styled.p`
    max-width:45%;
    margin: 0 auto;
    text-align:center;
    font-size:18px;
`
const BannerList = styled.ul`
    margin: 35px 0;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Banner = (probs) => {
        return (
            <BannerWrap>
                <BannerContainer>
                   <BannerHeading> Join the Club and get the Benefits</BannerHeading>
                        <BannerText>
                        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                        </BannerText>
                    <BannerList>
                                {BannerListItem.map((item)=>(
                                    <li style={{cursor:"pointer"}}>
                                        <a>{item.content}</a>
                                    </li>
                                ))}
                    </BannerList>
                </BannerContainer>
            </BannerWrap>
        );
}


export default Banner;