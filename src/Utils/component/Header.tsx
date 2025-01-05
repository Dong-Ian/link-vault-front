import { Container } from "@mantine/core";
import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        height: "84px",
        backgroundColor: "var(--mantine-color-body)",
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
