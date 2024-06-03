import { IconButton, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useCart } from "../cart/useCart";
import { red } from "@mui/material/colors";

export default function HeaderCart() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <IconButton aria-label="cart">
        <ShoppingCartCheckoutIcon />
        <Typography
          color={red}
          sx={{
            position: "relative",
            top: -10,
            right: 0,
          }}
        >
          {totalItems > 0 ? totalItems : null}
        </Typography>
      </IconButton>
    </>
  );
}
