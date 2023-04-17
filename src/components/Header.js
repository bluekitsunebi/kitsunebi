import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Button from "./Button";
import { getHeight, headerHeight } from "../helpers/helpers";

export default function Header() {
  const [underlineButton, setUnderlineButton] = useState("home");

  const [headerColor, setHeaderColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 0
      ? setHeaderColor("rgb(18,23,52)")
      : setHeaderColor("transparent");

      if (
      // HOME
      window.scrollY + headerHeight() >= 0 &&
      window.scrollY + headerHeight() <
        getHeight("aboutSection") - (window.innerHeight - headerHeight()) / 2
    ) {
      setUnderlineButton("home");

    } else if (
      // ABOUT
      window.scrollY + headerHeight() >=
        getHeight("aboutSection") - (window.innerHeight - headerHeight()) / 2 &&
      window.scrollY + headerHeight() <
        getHeight("languageCoursesSection") -
          (window.innerHeight - headerHeight()) / 2
    ) {
      setUnderlineButton("about");

    } else if (
      // LANGUAGE
      window.scrollY + headerHeight() >=
        getHeight("languageCoursesSection") -
          (window.innerHeight - headerHeight()) / 2 &&
      window.scrollY + headerHeight() <
        getHeight("programmingCoursesSection") -
          (window.innerHeight - headerHeight()) / 2
    ) {
      setUnderlineButton("language");

    } else if (
      // PROGRAMMING
      window.scrollY + headerHeight() >=
        getHeight("programmingCoursesSection") -
          (window.innerHeight - headerHeight()) / 2 &&
      window.scrollY + headerHeight() <
        getHeight("faqSection") - (window.innerHeight - headerHeight()) / 2
    ) {
      setUnderlineButton("programming");

    } else if (
      // FAQ
      window.scrollY + headerHeight() >=
        getHeight("faqSection") - (window.innerHeight - headerHeight()) / 2 &&
      window.scrollY + headerHeight() <
        getHeight("contactSection") - (window.innerHeight - headerHeight()) / 2
    ) {
      setUnderlineButton("faq");

    } else if (
      // CONTACT
      window.scrollY + headerHeight() >=
      getHeight("contactSection") - (window.innerHeight - headerHeight()) / 2
    ) {
      setUnderlineButton("contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

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
          transform="capitalizeFirstLetter"
          section="heroSection"
        />

        <Button
          name="about"
          text="about"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="aboutSection"
        />

        <div className={styles.dropdown}>
          <Button
            name="language"
            text="language courses"
            type="withoutBorder"
            position=""
            underlinedButton={underlineButton}
            transform="capitalizeFirstLetter"
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
              transform="capitalizeFirstLetter"
            />
            <Button
              name="english"
              text="english"
              type="withoutBorder"
              position=""
              underlinedButton=""
              transform="capitalizeFirstLetter"
            />
          </div>
        </div>

        <Button
          name="programming"
          text="programming courses"
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
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
          transform="capitalizeFirstLetter"
          section="contactSection"
        ></Button>
      </nav>
    </header>
  );
}
