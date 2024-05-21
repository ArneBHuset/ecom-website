import { Container } from "@mui/material";
import Header from "../components/common/Header";
import CartCheckout from "../components/layout/Checkout";

function CartPage() {
  return (
    <>
      <Container>
        <Header />
        <CartCheckout />
      </Container>
    </>
  );
}

export default CartPage;
