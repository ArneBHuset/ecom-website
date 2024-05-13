import { Container } from "@mui/material";
import Header from "../components/header";
import HeroSection from "../components/hero";
import ApiCall from "../api/api-call";

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
