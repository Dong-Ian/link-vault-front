import React from "react";
import styles from "./atom.module.css";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const Icon: React.FC<IconProps> = ({ src, alt, className, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.icon} ${className || ""}`}
      onClick={onClick}
    />
  );
};

export default Icon;
