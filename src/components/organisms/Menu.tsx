import React from "react";
import SideBar from "../atoms/SideBar";
import styles from "./organisms.module.css";
import CancelButton from "../atoms/CancelButton";

interface MenuProps {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ setIsMenuOpened }) => {
  return (
    <>
      <div className={styles.overlay} onClick={() => setIsMenuOpened(false)} />
      <SideBar className={styles.menu}>
        <CancelButton setIsMenuOpened={setIsMenuOpened} />
      </SideBar>
    </>
  );
};

export default Menu;
