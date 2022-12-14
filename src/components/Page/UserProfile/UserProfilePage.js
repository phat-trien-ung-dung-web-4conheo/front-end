import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Header from "../../Header";
import Footer from "../../Footer";
import Banner from "../../Banner";
import { Tab, Tabs } from "@mui/material";
import ChangePassword from "./ChangePassword";
import OrderStatus from "./OrderStatus.js";
import UserInfo from "./UserInfo";
import Logout from "./Logout";
import TabPanel from "./TabPanel";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../redux/cartSlice";
import { useSelector } from "react-redux";
import WishList from "./WishList";
const PageBanner = styled.div`
  background-image: url(https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg?w=2000);
`;
const Heading = styled.h1`
  font-size: 50px;
  line-height: 42px;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  padding: 60px 0;
`;
const UserAccount = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
  margin: 35px 10%;
`;
const UserMenu = styled.div`
  flex-grow: 0;
`;
const UserWrap = styled.div`
  flex-grow: 1;
`;

const UserProfilePage = () => {
  // LOGOUT
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
    navigate("/");
  };

  // GET CURRENT USER
  const currentUser = useSelector((state) => state.user.login.currentUser);
  // NEGATIVE SIDEBAR
  const tabsArr = [
    {
      component: <UserInfo />,
      title: "account info",
    },
    {
      component: <OrderStatus />,
      title: "order status",
    },
    {
      component: <WishList />,
      title: "wish list",
    },
    {
      component: <ChangePassword />,
      title: "change password",
    },
    {
      component: <Logout />,
      title: "logout",
    },
  ];
  const [tabValue, setTabValue] = useState(0);
  const handleChangeTab = (e, newValue) => {
    setTabValue(newValue);
  };
  //
  return (
    <div>
      <Header></Header>

      <PageBanner>
        <Heading>{currentUser?.username}</Heading>
      </PageBanner>

      <UserAccount>
        <UserMenu>
          <Tabs
            value={tabValue}
            onChange={handleChangeTab}
            variant="scrollable"
            orientation={"vertical"}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              borderColor: "divider",
            }}
          >
            {tabsArr.map((item, index) => (
              <Tab
                onClick={item.title === "logout" ? handleLogout : null}
                key={index}
                label={item.title.toUpperCase()}
                sx={{
                  fontSize: "12px",
                }}
              />
            ))}
          </Tabs>
        </UserMenu>
        <UserWrap>
          <main
            style={{
              flex: "1",
            }}
          >
            {tabsArr.map((item, index) => (
              <TabPanel key={index} value={tabValue} index={index}>
                {item.component}
              </TabPanel>
            ))}
          </main>
        </UserWrap>
      </UserAccount>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default UserProfilePage;
