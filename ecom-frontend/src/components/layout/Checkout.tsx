import Grid from "@mui/material/Grid";
import CartList from "../common/CartList";
import Checkout from "../common/CartCeckout";
import { Item } from "../ui/other/Item";

export default function CartCheckout() {
  return (
    <Grid container rowSpacing={0} columnSpacing={6}>
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
