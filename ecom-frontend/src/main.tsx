import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { CartProvider } from "./components/ui/cart/CartContext.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#43080b",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
