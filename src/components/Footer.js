import React from "react";
import ReactDOM from "react-dom";
import styles from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.email}>
        <span className={`${"material-icons-round"} ${styles.mailIcon}`}>
          email
        </span>
        vicentiuchesca@gmail.com
      </div>
      <div className={styles.terms}>Terms and conditions</div>
      <div className={styles.about}>About</div>

      <div className={styles.phone}>
        <span className={`${"material-icons-round"} ${styles.phoneIcon}`}>
          phone
        </span>
        +40 745 984 726
      </div>
      <div className={styles.privacy}>Privacy policy</div>
      <div className={styles.faq}>FAQ</div>

      <div className={styles.contact}>Contact</div>
      <div className={styles.social}>
        <SocialIcon
          url="https://www.facebook.com/vicentiu.chesca"
          network="facebook"
          fgColor="#fff"
          style={{ height: "2rem", width: "2rem" }}
          className={styles.facebook}
        />
      </div>

      <div className={styles.copyright}>&copy; Copyright 2023, Kitsunebi Miyabi SRL</div>
    </footer>
  );
}
