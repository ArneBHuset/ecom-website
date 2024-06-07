import React, { ReactNode } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Box, Container } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box>
        <Header />
        <Box component="main">{children}</Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
