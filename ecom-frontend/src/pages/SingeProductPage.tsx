import { Container } from "@mui/material";
import Header from "../components/common/Header";
import ViewProduct from "../components/common/ViewProduct";

export default function SingleProductPage() {
  return (
    <>
      <Container>
        <Header />
        <ViewProduct />
      </Container>
    </>
  );
}
