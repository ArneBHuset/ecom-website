import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import SingleProductPage from "./pages/SingeProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/Singleproduct/:productId"
          element={<SingleProductPage />}
        ></Route>
        <Route path="/contact" element={<ContactPage />} />
        // Add more routes here
      </Routes>
    </BrowserRouter>
  );
}

export default App;
