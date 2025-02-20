import React from "react";
import Image from "../atoms/Image";
import googleIcon from "../../assets/images/google.png";
import styles from "../atoms/atom.module.css";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
};

const LoginButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Image
      alt="Google 로그인 버튼"
      src={googleIcon}
      className={styles.loginButton}
      onClick={onClick}
    />
  );
};

export default LoginButton;
