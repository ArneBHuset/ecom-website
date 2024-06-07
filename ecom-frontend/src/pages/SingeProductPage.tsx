import ViewProduct from "../components/products/ViewProduct";
import { Container } from "@mui/material";

export default function SingleProductPage() {
  return (
    <>
      <Container maxWidth="md">
        <ViewProduct />
      </Container>
    </>
  );
}
