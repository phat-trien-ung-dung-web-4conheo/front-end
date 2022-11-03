import React, { Component } from 'react';
import styled from 'styled-components';
import {categoryItems, menuItems} from '../data/footer_data';
import License from './License';


const Wrap = styled.div`
    width: calc(50%/3);
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`
const FooterItems = styled.ul`
    color: black;
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
    color:black;
    font-weight:600;
    font-size:24px;
    line-height:24px;
`
const EmailForm = styled.div`
    
`
const Form = styled.input`
    color: black;
    padding: 20px;
    border: 0.5px solid black;
    opacity: 0.2;
    width: 60%;
    border-bottom-left-radius:5px;
    border-top-left-radius:5px;
`
const SignUpBtn = styled.button`
    color:#333;
    width:300px;
    padding:20.5px;
    background-color:#fff;
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
`

class Footer extends Component {
    render() {
        return (
            <div style={{display:"flex", padding:"40px",height:"100%",backgroundColor:"#ffdb00",flexGrow:"1"}}>
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
                <Wrap id='footer_form'>
                    <Heading>Join our mailing list</Heading>
                    <EmailForm>
                        <Form type="text" placeholder='Your Email here...' style={{color:'black'}}/>
                        <SignUpBtn>Sign up now</SignUpBtn>
                    </EmailForm>
                </Wrap>
            
            </div>
        );
    }
}

export default Footer;