import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CartList from "../common/CartList";
import Checkout from "../common/CartCeckout";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
