import React from "react";
import styles from "./molecules.module.css";
import Typography from "../atoms/Typography";
import Container from "../atoms/Container";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Typography type="Head2">Link Vault</Typography>
      </Container>
    </header>
  );
};

export default Header;
