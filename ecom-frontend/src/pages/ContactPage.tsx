import { Container } from "@mui/material";
import ContactForm from "../components/common/ContactForm";
import Header from "../components/common/Header";

function ContactPage() {
  return (
    <>
      <Container>
        <Header />
        <ContactForm />
      </Container>
    </>
  );
}

export default ContactPage;
