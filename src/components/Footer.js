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
  
  const aboutSectionPosition = useSelector((state) => state.aboutSection.yAxisPosition) - headerHeight;
  const FAQsectionPosition = useSelector((state) => state.FAQsection.yAxisPosition) - headerHeight;
  const contactSectionPosition = useSelector((state) => state.contactSection.yAxisPosition) - headerHeight;

  const handleClick = (sectionPosition, link, section) => {
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

  return (
    <footer className={styles.Footer}>
      <div className={styles.email}>
        <span className={`${"material-icons-round"} ${styles.mailIcon}`}>
          email
        </span>
        vicentiuchesca@gmail.com
      </div>
      <div className={styles.terms}>Terms and conditions</div>
      <Link to={"/"} className={styles.link}>
        <div
          className={styles.about}
          onClick={() => handleClick(aboutSectionPosition, "/", "aboutSection")}
        >
          About
        </div>
      </Link>

      <div className={styles.phone}>
        <span className={`${"material-icons-round"} ${styles.phoneIcon}`}>
          phone
        </span>
        +40 745 984 726
      </div>
      <div className={styles.privacy}>Privacy policy</div>
      <Link to={"/"} className={styles.link}>
        <div
          className={styles.faq}
          onClick={() => handleClick(FAQsectionPosition, "/", "FAQsection")}
        >
          FAQ
        </div>
      </Link>

      <Link to={"/"} className={styles.link}>
        <div
          className={styles.contact}
          onClick={() => handleClick(contactSectionPosition, "/", "contactSection")}
        >
          Contact
        </div>
      </Link>
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
