import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./atom.module.css";
import classNames from "classnames";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "fill" | "outline" | "ghost";
  isActive?: boolean;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "fill",
  isActive = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[variant],
        isActive && styles.active,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
