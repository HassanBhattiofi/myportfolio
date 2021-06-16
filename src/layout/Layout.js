import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <title>Hassan's Portfolio</title>
      <meta name='theme-color' content='#0F1624' />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
