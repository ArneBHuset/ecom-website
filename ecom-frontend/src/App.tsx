import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import SingleProductPage from "./pages/SingeProductPage";
import Layout from "./components/layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkoutSuccess" element={<CheckoutSuccessPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/Singleproduct/:productId"
            element={<SingleProductPage />}
          ></Route>
          <Route path="/contact" element={<ContactPage />} />
          // Add more routes here
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
