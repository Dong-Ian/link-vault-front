import { ReactNode, CSSProperties } from "react";
import styles from "./atom.module.css";
import classNames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Container = ({ children, className, style }: ContainerProps) => {
  return (
    <div className={classNames(styles.container, className)} style={style}>
      {children}
    </div>
  );
};

export default Container;
