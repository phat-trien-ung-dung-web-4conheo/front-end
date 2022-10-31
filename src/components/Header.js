import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import dataNav from "../data/data";
const Container = styled.header`
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 4;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 40px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Search = styled.div``;

const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;
const Cart = styled.div``;

const User = styled.div``;

const Right = styled.div`
  flex: 1;
`;

const Header = (props) => {
  return (
    <Container>
      <Left>
        <Search></Search>
      </Left>
      <Center>
        <HeaderMain>
          <SearchIcon></SearchIcon>
          <Logo>Logo</Logo>
          <RightHeader>
            <Cart>
              <ShoppingCartIcon></ShoppingCartIcon>{" "}
            </Cart>
            <User>
              <AccountCircleIcon></AccountCircleIcon>{" "}
            </User>
          </RightHeader>
        </HeaderMain>
        <Nav>
          {dataNav.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </Nav>
      </Center>
      <Right></Right>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
