import { ComponentProps, forwardRef, HTMLProps } from "react";
import styles from "./atom.module.css";

export type InputProps = ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  ({ className, type = "text", ...others }, ref) => {
    return (
      <input
        type={type}
        className={`${styles.input} ${className || ""}`}
        ref={ref}
        {...others}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
