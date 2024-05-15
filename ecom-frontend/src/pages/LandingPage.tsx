import { Container } from "@mui/material";
import Header from "../components/common/Header";
import HeroSection from "../components/layout/Hero";

function LandingPage() {
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
