import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../logo.svg";
import { ReactSVG } from "react-svg";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.currentSection);

  const handleClick = (section) => {
    dispatch({ type: "CHANGE_SECTION", payload: section });
  };

  return (
    <header className={styles.header}>
      <ReactSVG src={logo} className={styles.svg} />
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => handleClick("home")}>Home</button>
        <button className={styles.button} onClick={() => handleClick("about")}>About</button>
        <button className={styles.button} onClick={() => handleClick("pricing")}>Pricing</button>
        <button className={styles.button} onClick={() => handleClick("contact")}>Contact</button>
        <button className={styles.button} onClick={() => handleClick("FAQ")}>FAQ</button>
      </div>
    </header>
  );
};

export default Header;

// home, freeAppointment, about, pricing(pricing, see details, fiecare modul are pagina lui), contact, FAQ

// button:pricing -> modulul respectiv (buton: inscriere) - deschide un formular mai jos (button: send)
