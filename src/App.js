import { useSelector } from "react-redux";
import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import MainHomePage from "./components/MainHomePage/MainHomePage";
import SignInPage from "./components/Page/Authentication/SignInPage";
import SignUpPage from "./components/Page/Authentication/SignUpPage";
import BasketPage from "./components/Page/BasketPage";
import AboutUsPage from "./components/Page/AboutUs/AboutUsPage";
import ContactUs from "./components/Page/ContactUs";
import FullPage from "./components/Page/FullPage/FullPage";
import ProductCategoryPage from "./components/Page/ProductCategoryPage";
import ProductDetailPage from "./components/Page/ProductDetail/ProductDetailPage";
import UserProfilePage from "./components/Page/UserProfile/UserProfilePage";
import CheckOutPage from "./components/Page/CheckoutPage/CheckOutPage";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  localStorage.clear();
  return (
    <Routes>
      <Route path="contactus" element={<ContactUs></ContactUs>} />
      <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>} />
      <Route
        path="/sign-in"
        element={user ? <Navigate to="/" /> : <SignInPage></SignInPage>}
      />

      <Route path="/sign-up" element={<SignUpPage></SignUpPage>} />
      <Route
        path="/user/:id"
        element={<UserProfilePage></UserProfilePage>}
      />
      <Route path="/user/checkout" element={<CheckOutPage></CheckOutPage>} />

      <Route path="/" element={<FullPage />}>
        <Route path="/" element={<MainHomePage></MainHomePage>} />
        <Route
          path="/product/:id"
          element={<ProductDetailPage></ProductDetailPage>}
        />
        <Route path="/basket" element={<BasketPage></BasketPage>} />
        <Route
          path="/products/"
          element={<ProductCategoryPage></ProductCategoryPage>}
        />
        <Route
          path="/products/:id"
          element={<ProductCategoryPage></ProductCategoryPage>}
        />
      </Route>
    </Routes>
  );
}

export default App;
