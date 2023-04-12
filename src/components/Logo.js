import React from "react";
import styles from "./Logo.module.css"
import { ReactSVG } from "react-svg"
import logo from "../images/logo.svg"

export default function Logo() {
    return (
        <div className={styles.logoWithText}>
          <ReactSVG src={logo} className={styles.logo} />
          <div className={styles.logoName}>
            <p>Blue Kitsunebi</p>
          </div>
        </div>
    )
}

