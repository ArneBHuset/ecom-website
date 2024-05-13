import { Container } from "@mui/material";
import ProductList from "../components/ProductList";
import Header from "../components/header";
function ProductPage() {
  return (
    <>
      <Container>
        <Header />
        <ProductList />
      </Container>
    </>
  );
}

export default ProductPage;
