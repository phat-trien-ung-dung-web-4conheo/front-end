import React, { useRef, useState } from 'react';
import Footer from '../../Footer'
import { MenuItems, ItemContent } from '../../../data/aboutus_data';
import styled from 'styled-components';
import Header from '../../Header';

const UpdateStatus = styled.div`
    background-color: #ffdb00;
    padding: 64px 0px 80px 96px;
    margin-top:10%;
`
const UpdateStatusContent = styled.h2`
    font-size:25px;
    font-weight:600;
`
const UpdateStatusTime = styled.p`
    margin-top: 32px;
    font-size: 15px;
    color: black;
    opacity: 0.5;
`
const AboutUsContent = styled.div`
    height: 100%;
    margin: 0 160px 80px ;
    display:flex;
    justify-content:space-between;
    gap: 2.5rem;
`
const SideMenu = styled.div`
    margin-top:80px;
    width:33.3333%;
    border-right: 0.1px solid #ccc;
    font-size:20px;
    color: #2A254b;
`
const ListWrap = styled.ul`
    list-style: none;
    margin:0;
    bottom:0;
`
const ListItem = styled.a`
    cursor: pointer;
`
const MenuChoice = styled.li`
    margin-top:1.2rem;
    &:first-child{
        margin-top: 0px;
    }
    &:hover {
        font-weight: 600;
        font-size: 22px;
    }
`
const Content = styled.div`
    margin-top:80px;
    width:66.6666%;
`
const ContentWrap = styled.ul`
    box-sizing:border-box;
`
const TextWrap = styled.li`
    margin-top:80px;
    color:#2A254b;
    &:first-child{
        margin-top: 0px;
    }
`
const TextHeading = styled.h3`
    font-size:24px;
    text-align:center;
    font-weight:600;
`
const Text = styled.p`
    margin-top:40px;
    font-size:16px;
`   
const AboutUsPage = () => {
    return (
        <div>
            <Header></Header>
            <UpdateStatus>
                <UpdateStatusContent>Privacy Policy</UpdateStatusContent>
                <UpdateStatusTime>Last update....</UpdateStatusTime>
            </UpdateStatus>

            <AboutUsContent>
                <SideMenu>
                    <ListWrap>
                        {MenuItems.map((item)=>(
                            <MenuChoice>
                                <ListItem
                                   
                                >{item.content}</ListItem>
                            </MenuChoice>
                        ))}
                    </ListWrap>
                </SideMenu>

                <Content>
                    <ContentWrap>
                        {ItemContent.map((item)=>(
                            <TextWrap>
                                <div>                                   
                                    <TextHeading>{item.heading}</TextHeading>
                                    <Text>{item.content}</Text>
                                </div>
                            </TextWrap>
                        ))}
                    </ContentWrap>        
                </Content>
            </AboutUsContent>
           <Footer></Footer>
        </div>
    );
};

export default AboutUsPage;