
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHomePage from "./components/MainHomePage/MainHomePage";
import AuthenticationLayout from "./components/Page/Authentication/AuthenticationLayout";
import SignInPage from "./components/Page/Authentication/SignInPage";
import SignUpPage from "./components/Page/Authentication/SignUpPage";
import BasketPage from "./components/Page/BasketPage";
import ProductCategoryPage from "./components/Page/ProductCategoryPage";
import ProductDetailPage from "./components/Page/ProductDetail/ProductDetailPage";
import AboutUsPage from "./components/Page/AboutUsPage";
function App() {
  return (

    <Routes>
      <Route path="/sign-in" element={<SignInPage></SignInPage>} />
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/about-us" element={<AboutUsPage></AboutUsPage>}></Route>
    </Routes>
    

  );
}

export default App;
