import { red } from '@mui/material/colors';
import { flexbox } from '@mui/system';
import React, { Component } from 'react';
import styled from 'styled-components';
import categoryItems from '../data/categoryItems';
import menuItems from '../data/menuItems';
const Wrap = styled.div`
    width: calc(100%/5);
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`
const FooterItems = styled.ul`
    color: #f4f4f6;
    display:flex;
    flex-direction:column;
    gap:15px;

`
const Items = styled.li`
    padding: 0 5px;
    row-gap:10px;
    width:100%;
`
const Heading = styled.h3`
    color:#fff;
    font-weight:600;
    font-size:24px;
    line-height:24px;
`
class Footer extends Component {
    render() {
        return (
            <div style={{display:"flex", padding:"40px",height:"100%",backgroundColor:"#2a254b",flexGrow:"1"}}>
                <Wrap>
                    <Heading>Category</Heading>
                    <FooterItems>
                        {categoryItems.map((item)=>(
                            <Items>{item.content}</Items>
                        ))}
                    </FooterItems>
                </Wrap>
                <Wrap>
                    <Heading>Menu</Heading>
                    <FooterItems>
                        {menuItems.map((item)=>(
                            <Items>{item.content}</Items>
                        ))}
                    </FooterItems>
                </Wrap>
                <Wrap>
                    <Heading>Our Company</Heading>
                    <FooterItems>
                        {categoryItems.map((item)=>(
                            <Items>{item.content}</Items>
                        ))}
                    </FooterItems>
                </Wrap>
            </div>
        );
    }
}

export default Footer;