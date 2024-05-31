import { Box, Typography } from "@mui/material";
import { ProceedBtn } from "../ui/buttons/ProceedBtn";
import { useCart } from "../ui/cart/useCart";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate(); // Get the navigate function

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    if (totalItems >= 1) {
      navigate("/checkoutSuccess"); // Navigate programmatically
    }
  };

  return (
    <Box>
      <Typography>{totalItems} items</Typography>
      <Typography>Total: {totalPrice} kr</Typography>
      <ProceedBtn onClick={handleCheckout} disabled={totalItems < 1}>
        Checkout
      </ProceedBtn>
    </Box>
  );
}
