import { Container } from "@mui/material";
import Header from "../components/header";
import HeroSection from "../components/hero";

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
