import React from "react";
import styles from "./organisms.module.css";
import SideBar from "../atoms/SideBar";
import CancelButton from "../atoms/CancelButton";
import MenuItem from "../molecules/MenuItem";
import house_icon from "../../assets/icons/house.png";
import folder_icon from "../../assets/icons/folder.png";

interface MenuProps {
  isMenuOpened: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpened, setIsMenuOpened }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${isMenuOpened ? styles.open : ""}`}
        onClick={() => setIsMenuOpened(false)}
      />
      <SideBar className={`${styles.menu} ${isMenuOpened ? styles.open : ""}`}>
        <div className={styles.cancelbutton}>
          <CancelButton setIsMenuOpened={setIsMenuOpened} />
        </div>
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
