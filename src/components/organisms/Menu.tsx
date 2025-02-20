import React from "react";
import SideBar from "../atoms/SideBar";
import styles from "./organisms.module.css";
import CancelButton from "../atoms/CancelButton";
import MenuItem from "../molecules/MenuItem";
import house_icon from "../../assets/icons/house.png";
import folder_icon from "../../assets/icons/folder.png";

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
          <MenuItem iconSrc={house_icon} alt="exic">
            Home
          </MenuItem>
          <MenuItem iconSrc={folder_icon} alt="exic">
            Storage
          </MenuItem>
        </div>
      </SideBar>
    </>
  );
};

export default Menu;
