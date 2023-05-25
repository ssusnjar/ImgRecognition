import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <p className="f3 link dim black underlined pa3 pointer">Sign out</p>
    </nav>
  );
};

export default Navigation;
