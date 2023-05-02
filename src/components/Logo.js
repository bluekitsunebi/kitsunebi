import React from "react";
import styles from "./Logo.module.css"
import logoImg from "../images/logo.png"
// import { ReactSVG } from "react-svg"
// import logo from "../images/logo.svg"

export default function Logo() {
    return (
        <div className={styles.logoWithText}>
          {/* <ReactSVG src={logo} className={styles.logo} /> */}
          <img src={logoImg} className={styles.logo}></img>
          <div className={styles.logoName}>
            <p>Blue</p>
            <p>Kitsunebi</p>
          </div>
        </div>
    )
}

