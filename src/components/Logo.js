import React from "react";
import styles from "./Logo.module.css"
import logoImg from "../images/logo.png"

export default function Logo() {
    return (
        <div className={styles.logoWithText}>
          <img src={logoImg} className={styles.logo}></img>
          <div className={styles.logoName}>
            <div>Blue</div>
            <div>Kitsunebi</div>
          </div>
        </div>
    )
}

