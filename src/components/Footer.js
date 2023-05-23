import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";
import { setLocation, setLink, setSection, switchWasClicked } from "../store/routerSlice";

export default function Footer() {
  const location = useLocation().pathname;

  const dispatch = useDispatch();
  
  const headerHeight = useSelector((state) => state.header.height);
  
  const heroSectionPosition = 0;
  const aboutSectionPosition = useSelector((state) => state.aboutSection.yAxisPosition) - headerHeight;
  const FAQsectionPosition = useSelector((state) => state.FAQsection.yAxisPosition) - headerHeight;
  const contactSectionPosition = useSelector((state) => state.contactSection.yAxisPosition) - headerHeight;


  const handleSectionClick = (sectionPosition, link, section) => {
    window.scroll({
      top: sectionPosition,
      left: 0,
      behavior: "instant",
    });
    dispatch(setLocation(location));
    dispatch(setLink(link));
    dispatch(setSection(section));
    dispatch(switchWasClicked());
  };

  const handleEmailClick = () => {
    const recipientEmail = 'bluekitsunebi@gmail.com';
    const subject = 'Contact Blue Kitsunebi';

    const emailUrl = `https://mail.google.com/mail/?view=cm&to=${recipientEmail}&su=${subject}`;
    window.open(emailUrl, '_blank');
  };

  return (
    <footer className={styles.Footer}>
      {/* MAIL */}
      <div className={styles.email} onClick={handleEmailClick}>
        <span className={`${"material-icons-round"} ${styles.mailIcon}`}>
          email
        </span>
        bluekitsunebi@gmail.com
      </div>

      {/* TERMENII CONDITIILE */}
      <div 
        className={styles.terms}
        onClick={() => handleSectionClick(heroSectionPosition, "/", "HeroSection")}
      >
        Termenii si conditiile
      </div>

      {/* ABOUT */}
      <Link to={"/"} className={`${styles.link} ${styles.aboutLink}`}>
        <div
          className={styles.about}
          onClick={() => handleSectionClick(aboutSectionPosition, "/", "aboutSection")}
        >
          About
        </div>
      </Link>

      {/* PHONE */}
      <div className={styles.phone}>
        <span className={`${"material-icons-round"} ${styles.phoneIcon}`}>
          phone
        </span>
        +40 745 984 726
      </div>

      {/* PRIVACY */}
      <div
        className={styles.privacy}
        onClick={() => handleSectionClick(heroSectionPosition, "/", "HeroSection")}
      >
        Politica de confidentialitate
      </div>

      {/* FAQ */}
      <Link to={"/"} className={styles.link}>
        <div
          className={styles.faq}
          onClick={() => handleSectionClick(FAQsectionPosition, "/", "FAQsection")}
        >
          FAQ
        </div>
      </Link>

      {/* CONTACT SECTION */}
      <Link to={"/"} className={`${styles.link} ${styles.contactLink}`}>
        <div
          className={styles.contact}
          onClick={() => handleSectionClick(contactSectionPosition, "/", "contactSection")}
        >
          Contact
        </div>
      </Link>

      {/* SOCIAL */}
      <div className={styles.social}>
        <SocialIcon
          url="https://www.facebook.com/vicentiu.chesca"
          network="facebook"
          fgColor="#fff"
          style={{ height: "2rem", width: "2rem" }}
          className={styles.facebook}
        />
      </div>

      <div className={styles.copyright}>
        &copy; Copyright 2023, Kitsunebi Miyabi SRL
      </div>
    </footer>
  );
}
