import { IconButton, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useCart } from "../cart/useCart";
import { useTheme } from "@mui/material";

export default function HeaderCart() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const theme = useTheme();

  return (
    <>
      <IconButton
        aria-label="cart"
        style={{ color: theme.palette.common.white }}
      >
        <ShoppingCartCheckoutIcon sx={{ fontSize: theme.typography.h4 }} />
        <Typography
          style={{ color: theme.palette.common.white }}
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
