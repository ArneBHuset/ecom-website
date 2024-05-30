import { Container } from "@mui/material";
import Header from "../components/common/Header";
import ViewProduct from "../components/common/ViewProduct";
import Footer from "../components/common/Footer";

export default function SingleProductPage() {
  return (
    <>
      <Container>
        <Header />
        <ViewProduct />
        <Footer />
      </Container>
    </>
  );
}
