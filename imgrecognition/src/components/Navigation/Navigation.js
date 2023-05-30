import React from "react";
import styles from "./Navigation.module.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className={styles.navigation}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underlined pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className={styles.navigation}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underlined pa3 pointer"
        >
          Sign in
        </p>

        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underlined pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
