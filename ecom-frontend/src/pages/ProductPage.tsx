import { Container } from "@mui/material";
import ProductList from "../components/layout/ProductList";
import Header from "../components/common/Header";
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
