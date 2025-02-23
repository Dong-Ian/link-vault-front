import React, { ReactNode } from "react";
import styles from "./atom.module.css";
import classNames from "classnames";

interface CardProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={classNames(styles.card, className)}>
      {children}
    </div>
  );
};

export default Card;
