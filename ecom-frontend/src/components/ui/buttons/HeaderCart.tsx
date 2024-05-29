import { IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../cart/useCart";
import Box from "@mui/material";
import { red } from "@mui/material/colors";

export default function HeaderCart() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (totalItems > 0) {
  }

  return (
    <>
      <IconButton aria-label="cart">
        <AddShoppingCartIcon />
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
