import React from "react";
import styles from "./molecules.module.css";
import Typography from "../atoms/Typography";
import Container from "../atoms/Container";
import Icon from "../atoms/Icon";
import hamburger from "../../assets/icons/hamburger.png";

interface HeaderProps {
  setIsMenuOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setIsMenuOpened }) => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        {setIsMenuOpened && (
          <div className={styles.right_section}>
            <Icon
              src={hamburger}
              alt="menu"
              className={styles.menu_icon}
              onClick={() => setIsMenuOpened(true)}
            />
          </div>
        )}
        <Typography type="Head2">Link Vault</Typography>
      </Container>
    </header>
  );
};

export default Header;
