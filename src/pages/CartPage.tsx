import CartCheckout from "../components/layout/Checkout";
import { Container } from "@mui/material";

function CartPage() {
  return (
    <>
      <Container maxWidth="md">
        <CartCheckout />
      </Container>
    </>
  );
}

export default CartPage;
