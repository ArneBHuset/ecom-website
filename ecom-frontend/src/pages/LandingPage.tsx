import { Container } from "@mui/material";
import Header from "../components/common/Header";

function LandingPage() {
  ApiCall();
  return (
    <>
      <Container>
        <Header />
        <HeroSection />
      </Container>
    </>
  );
}

export default LandingPage;
