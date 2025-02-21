import React, { ReactNode } from "react";
import styles from "./molecules.module.css";
import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography";

interface MenuItemProps {
  iconSrc: string;
  alt: string;
  children: ReactNode;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  iconSrc,
  alt,
  children,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={styles.menu_item}>
      <Icon src={iconSrc} alt={alt} className={styles.menu_item_icon} />
      <Typography type="P1">{children}</Typography>
    </div>
  );
};

export default MenuItem;
