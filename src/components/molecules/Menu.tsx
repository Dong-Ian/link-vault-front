import React from "react";
import SideBar from "../atoms/SideBar";
import styles from "./molecules.module.css";

interface MenuProps {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ setIsMenuOpened }) => {
  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => setIsMenuOpened(false)}
      ></div>
      <SideBar className={styles.menu}></SideBar>
    </>
  );
};

export default Menu;
