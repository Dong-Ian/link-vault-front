import React from "react";
import SideBar from "../atoms/SideBar";
import styles from "./organisms.module.css";
import CancelButton from "../atoms/CancelButton";
import exic from "../../assets/icons/xmark.png";
import MenuItem from "../molecules/MenuItem";

interface MenuProps {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ setIsMenuOpened }) => {
  return (
    <>
      <div className={styles.overlay} onClick={() => setIsMenuOpened(false)} />
      <SideBar className={styles.menu}>
        <CancelButton setIsMenuOpened={setIsMenuOpened} />
        <div>
          <MenuItem iconSrc={exic} alt="exic">
            example menu item
          </MenuItem>
          <MenuItem iconSrc={exic} alt="exic">
            example menu item
          </MenuItem>
          <MenuItem iconSrc={exic} alt="exic">
            example menu item
          </MenuItem>
        </div>
      </SideBar>
    </>
  );
};

export default Menu;
