import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  const [underlineButton, setUnderlineButton] = useState("home");

  const [headerColor, setHeaderColor] = useState("transparent");

  const [open, setOpen] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 0
      ? setHeaderColor("rgb(18,23,52)")
      : setHeaderColor("transparent")
    
    if (window.scrollY < window.innerHeight / 2) {
      setUnderlineButton("home");
      return;
    }
    if (window.scrollY < window.innerHeight) {
      setUnderlineButton("about");
      return;
    }
    if (window.scrollY < (window.innerHeight * 3) / 2) {
      setUnderlineButton("language");
      return;
    }
    if (window.scrollY < (window.innerHeight * 4) / 2) {
      setUnderlineButton("programming");
      return;
    }
    if (window.scrollY < (window.innerHeight * 5) / 2) {
      setUnderlineButton("faq");
      return;
    }
    if (window.scrollY < (window.innerHeight * 6) / 2) {
      setUnderlineButton("contact");
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header
      id="header"
      className={styles.header}
      style={{ background: headerColor }}
    >
      <Logo></Logo>

      <nav className={styles.navbar}>
        <Button
          name="home"
          text="home"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalize"
          section="heroSection"
        />

        <Button
          name="about"
          text="about"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalize"
          section="aboutSection"
        />

        <div className={styles.dropdown}>
          <Button
            name="language"
            text="language courses"
            type="withoutBorder"
            position=""
            underlinedButton={underlineButton}
            transform="capitalize"
            section="languageCoursesSection"
          />
          <div
            className={styles.dropdownContent}
            style={{ background: headerColor }}
          >
            <Button
              name="japanese"
              text="japanese"
              type="withoutBorder"
              position=""
              underlinedButton=""
              transform="capitalize"
            />
            <Button
              name="english"
              text="english"
              type="withoutBorder"
              position=""
              underlinedButton=""
              transform="capitalize"
            />
          </div>
        </div>


        <Button
          name="programming"
          text="programming courses"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalize"
          section="programmingCoursesSection"
        ></Button>

        <Button
          name="faq"
          text="faq"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="uppercase"
          section="faqSection"
        ></Button>

        <Button
          name="contact"
          text="contact"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalize"
          section="contactSection"
        ></Button>
      </nav>
    </header>
  );
}
