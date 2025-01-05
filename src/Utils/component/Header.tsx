import { Container } from "@mantine/core";
import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        height: "84px",
        width: "100%",
        backgroundColor: "white",
        borderBottom:
          "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
      }}
    >
      <Container
        style={{
          height: "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Link Vault</h1>
      </Container>
    </header>
  );
};

export default Header;
