import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0);
      setIsMenuOpened(false);
    } else {
      navigate(path);
    }
  };

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
          <MenuItem
            iconSrc={house_icon}
            alt="exic"
            onClick={() => handleNavigation("/main")}
          >
            Home
          </MenuItem>
          <MenuItem
            iconSrc={folder_icon}
            alt="exic"
            onClick={() => handleNavigation("/storage")}
          >
            Storage
          </MenuItem>
        </div>
      </SideBar>
    </>
  );
};

export default Menu;
