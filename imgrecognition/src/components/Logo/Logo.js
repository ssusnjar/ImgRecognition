import React from "react";
import LogoImg from "../../Pictures/logo2.jpg";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.Logoimg}>
      <img src={LogoImg} alt="Logo" className={styles.Img}></img>
    </div>
  );
};

export default Logo;
