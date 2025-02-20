import React from "react";
import styles from "./molecules.module.css";
import Typography from "../atoms/Typography";
import Container from "../atoms/Container";
import Icon from "../atoms/Icon";
import hamburger from "../../assets/icons/hamburger.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.right_section}>
          <Icon src={hamburger} alt="menu" className={styles.menu_icon} />
        </div>
        <Typography type="Head2">Link Vault</Typography>
      </Container>
    </header>
  );
};

export default Header;
