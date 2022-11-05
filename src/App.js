import Header from "./components/Header";
import MainHomePage from "./components/MainHomePage/MainHomePage";
import BasketPage from "./components/Page/BasketPage";
import ProductCategoryPage from "./components/Page/ProductCategoryPage";
import ProductDetail from "./components/Page/ProductDetail/ProductDetail";
function App() {
  return (
    <div style={{ height: "200vh" }}>
      <Header></Header>
      <ProductDetail></ProductDetail>
    </div>
  );
}

export default App;
