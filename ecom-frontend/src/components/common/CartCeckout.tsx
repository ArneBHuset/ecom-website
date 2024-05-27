import { Box } from "@mui/material";
import { ProceedBtn } from "../ui/buttons/ProceedBtn";
import { useCart } from "../ui/cart/useCart";

export default function Checkout() {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <Box>
      <div>{totalItems} items</div>
      <div>Total: {totalPrice} kr</div>
      <ProceedBtn onClick={handleCheckout}>Checkout</ProceedBtn>
    </Box>
  );
}
