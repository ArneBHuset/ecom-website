import SuccessMessage from "../components/cart/Success";
import { Container } from "@mui/material";

function CheckoutSuccessPage() {
  return (
    <>
      <Container maxWidth="md">
        <SuccessMessage />
      </Container>
    </>
  );
}

export default CheckoutSuccessPage;
