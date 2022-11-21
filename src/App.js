import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHomePage from "./components/MainHomePage/MainHomePage";
import AuthenticationLayout from "./components/Page/Authentication/AuthenticationLayout";
import SignInPage from "./components/Page/Authentication/SignInPage";
import SignUpPage from "./components/Page/Authentication/SignUpPage";
import BasketPage from "./components/Page/BasketPage";
import FullPage from "./components/Page/FullPage/FullPage";
import ProductCategoryPage from "./components/Page/ProductCategoryPage";
import ProductDetailPage from "./components/Page/ProductDetail/ProductDetailPage";
function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage></SignInPage>} />
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>} />
      <Route path="/" element={<FullPage />}>
        <Route path="/" element={<MainHomePage></MainHomePage>} />
        <Route
          path="/product/:id"
          element={<ProductDetailPage></ProductDetailPage>}
        />
        <Route path="/basket" element={<BasketPage></BasketPage>} />
        <Route
          path="/products/men"
          element={<ProductCategoryPage></ProductCategoryPage>}
        />
      </Route>
    </Routes>
  );
}

export default App;
