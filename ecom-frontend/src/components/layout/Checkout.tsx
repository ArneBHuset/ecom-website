import Grid from "@mui/material/Grid";
import CartList from "../cart/CartList";
import Checkout from "../cart/CartCeckout";
import { Item } from "../ui/other/Item";

export default function CartCheckout() {
  return (
    <Grid container columnSpacing={1}>
      <Grid item xs={12} sm={8}>
        <Item>
          <CartList />
        </Item>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Item>
          <Checkout />
        </Item>
      </Grid>
    </Grid>
  );
}
