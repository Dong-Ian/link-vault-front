import React from "react";
import styles from "./atom.module.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.image} ${className || ""}`}
      onClick={onClick}
    />
  );
};

export default Image;
