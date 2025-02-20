import React from "react";
import styles from "./atom.module.css";
import Image from "./Image";
import xmark from "../../assets/icons/xmark.png";

interface CancelButtonProps {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
const CancelButton: React.FC<CancelButtonProps> = ({ setIsMenuOpened }) => {
  return (
    <div className={styles.cancelbutton} onClick={() => setIsMenuOpened(false)}>
      <Image src={xmark} alt="xmark" />
    </div>
  );
};

export default CancelButton;
