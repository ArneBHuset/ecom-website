import { Box, Typography } from "@mui/material";
import { ProceedBtn } from "../ui/buttons/ProceedBtn";
import { useCart } from "../ui/cart/useCart";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

/**
 * Checkout component displays amount of items in cart and total sum.
 * Holds button for submitting the checkout, which is disabled if there are no items in cart.
 */
export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    if (totalItems >= 1) {
      navigate("/checkoutSuccess");
    }
  };

  return (
    <>
      <Box
        height={400}
        marginTop={-3}
        zIndex={-1000}
        textAlign={"center"}
        sx={{
          background: theme.palette.secondary.main,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Typography
          style={theme.typography.h4}
          paddingTop={6}
          sx={{ color: theme.palette.common.white }}
        >
          {totalItems} items
        </Typography>
        <Typography
          style={theme.typography.h4}
          sx={{ color: theme.palette.common.white }}
        >
          Total: {totalPrice}$
        </Typography>
        <ProceedBtn
          style={theme.typography.h4}
          onClick={handleCheckout}
          disabled={totalItems < 1}
          sx={{ marginTop: 2 }}
        >
          Checkout
        </ProceedBtn>
      </Box>
    </>
  );
}
