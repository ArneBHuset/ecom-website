import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../cart/useCart";

export default function HeaderCart() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  console.log(
    "This the current cart status: ",
    totalItems,
    "from HeaderCart.tsx"
  );

  return (
    <IconButton aria-label="cart">
      <AddShoppingCartIcon />
    </IconButton>
  );
}
