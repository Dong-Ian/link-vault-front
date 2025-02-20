import React, { ReactNode } from "react";
import styles from "./atom.module.css";
import classNames from "classnames";

interface SideBarProps {
  children?: ReactNode;
  className?: string;
}

const SideBar: React.FC<SideBarProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.sidebar, className)}>{children}</div>
  );
};

export default SideBar;
