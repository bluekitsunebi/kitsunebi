import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeight,
  setUnderlined,
  setColor,
  setMenu,
  closeMenu,
  setSlideDown,
  setWasAnimated,
  setPreviousLocation,
  setCurrentLocation,
} from "../store/headerSlice";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Button from "./Button";
import WebsiteLanguageSwitcher from "./WebsiteLanguageSwitcher";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import enData from "../helpers/data/lang/en.json";
import jaData from "../helpers/data/lang/ja.json";
import roData from "../helpers/data/lang/ro.json";

export default function Header({ onRender }) {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  // slide down animation
  let videosLoaded = useSelector((state) => state.heroSection.videosLoaded);
  let slideDown = useSelector((state) => state.header.slideDown);
  let wasAnimated = useSelector((state) => state.header.wasAnimated);
  let currentLocation = useSelector((state) => state.header.currentLocation);
  let previousLocation = useSelector((state) => state.header.previousLocation);
  let headerAnimation = (location !== '/') ? false : ((previousLocation !== '/' && previousLocation) ? false : true);

  useEffect(() => {
    dispatch(setCurrentLocation(location));
  }, []);

  useEffect(() => {
    if (!wasAnimated && videosLoaded) {
      dispatch(setWasAnimated(true));
      dispatch(setSlideDown(true));
    }
  }, [videosLoaded, wasAnimated, slideDown, location]);

  useEffect(() => {
    dispatch(setPreviousLocation(currentLocation));
    dispatch(setCurrentLocation(location));
  }, [location]);
  
  useEffect(() => {
    if(previousLocation && previousLocation !== '/' && location === '/'){
      headerAnimation = false;
    }
  }, [previousLocation])

  // ---------------------------------------------------------

  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const headerRef = useRef(null);
  let middle = 0;
  useEffect(() => {
    if (homeWasRendered === "true") {
      const style = window.getComputedStyle(headerRef.current);
      const height = parseInt(style.height);
      const paddingTop = parseInt(style.paddingTop);
      const paddingBottom = parseInt(style.paddingBottom);
      const totalHeight = height + paddingTop + paddingBottom;
      dispatch(setHeight(totalHeight));
      middle = (window.innerHeight - headerHeight) / 2 + headerHeight;
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  const headerHeight = useSelector((state) => state.header.height);
  const color = useSelector((state) => state.header.color);
  let isOpen = useSelector((state) => state.header.isOpen);
  let headerColor = !isOpen ? color : "var(--navyShadow50)";

  let underlineButton = useSelector((state) => state.header.underlined);

  const aboutSectionPosition = useSelector(
    (state) => state.aboutSection.yAxisPosition
  );
  const contactSectionPosition = useSelector(
    (state) => state.contactSection.yAxisPosition
  );
  const FAQsectionPosition = useSelector(
    (state) => state.FAQsection.yAxisPosition
  );
  const languageCoursesSectionPosition = useSelector(
    (state) => state.languageCoursesSection.yAxisPosition
  );
  const programmingSectionPosition = useSelector(
    (state) => state.programmingSection.yAxisPosition
  );

  const listenScrollEvent = () => {
    if (location === "/") {
      window.scrollY > 0
        ? dispatch(setColor("var(--navyShadow50)"))
        : dispatch(setColor("transparent"));
    } else {
      dispatch(setColor("var(--navyShadow50)"));
    }

    if (location === "/") {
      if (
        window.scrollY + middle >= 0 &&
        window.scrollY + middle < aboutSectionPosition
      ) {
        dispatch(setUnderlined("home"));
      } else if (
        window.scrollY + middle >= aboutSectionPosition &&
        window.scrollY + middle < languageCoursesSectionPosition
      ) {
        dispatch(setUnderlined("about"));
      } else if (
        window.scrollY + middle >= languageCoursesSectionPosition &&
        window.scrollY + middle < programmingSectionPosition
      ) {
        dispatch(setUnderlined("language"));
      } else if (
        window.scrollY + middle >= programmingSectionPosition &&
        window.scrollY + middle < FAQsectionPosition
      ) {
        dispatch(setUnderlined("programming"));
      } else if (
        window.scrollY + middle >= FAQsectionPosition &&
        window.scrollY + middle < contactSectionPosition
      ) {
        dispatch(setUnderlined("faq"));
      } else if (window.scrollY + middle >= contactSectionPosition) {
        dispatch(setUnderlined("contact"));
      }
    } else if (
      location.match(/individual-custom-japanese.*/) ||
      location.match(/group-custom-japanese.*/) ||
      location.match(/individual-custom-english.*/) ||
      location.match(/group-custom-english.*/)
    ) {
      dispatch(setUnderlined("language"));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  // STOP SCROLL WHEN MENU IS OPEN
  const yRef = useRef();

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const handleMenu = () => {
    if (!isOpen) {
      yRef.current = window.scrollY;
    }
    dispatch(setMenu());
  };

  useEffect(() => {
    if (window.innerWidth > 1540 && isOpen === true) {
      dispatch(closeMenu());
    }
  }, [window.innerWidth > 1540]);

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;

  return (
    <header
      id="header"
      ref={headerRef}
      className={`
        ${styles.Header}
        ${headerAnimation && styles.headerAnimation}
        ${
          location !== "/"
            ? styles.slideDown
            : !slideDown
            ? styles.slideUp
            : styles.slideDown
        } 
        ${!isOpen && styles.Header__close}
      `}
      style={{ background: headerColor }}
    >
      <div className={styles.header_phone_close}>
        {isOpen ? (
          <CloseRoundedIcon className={styles.menu} onClick={handleMenu} />
        ) : (
          <MenuRoundedIcon className={styles.menu} onClick={handleMenu} />
        )}
        <Link to={"/"} className={styles.Logo}>
          <div onClick={handleLogoClick}>
            <Logo />
          </div>
        </Link>
        <div
          className={`${styles.WebsiteLanguageSwitcher_phone} ${
            !isOpen ? styles.show : styles.hide
          }`}
        >
          <WebsiteLanguageSwitcher />
        </div>
        <div className={isOpen ? styles.show : styles.hide}></div>
      </div>

      <div className={styles.header__phone}>
        {isOpen ? (
          <CloseRoundedIcon
            className={styles.menu__phone}
            onClick={handleMenu}
          />
        ) : (
          <MenuRoundedIcon
            className={styles.menu__phone}
            onClick={handleMenu}
          />
        )}
        <Link to={"/"} className={styles.Logo__phone}>
          <div onClick={handleLogoClick}>
            <Logo />
          </div>
        </Link>
      </div>

      <nav className={`${styles.navbar} ${!isOpen && styles.navbar__close}`}>
        <Button
          name="home"
          category="header"
          text={langData.Header.home}
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="heroSection"
          link="/"
        />

        <Button
          name="about"
          category="header"
          text={langData.Header.about}
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="aboutSection"
          link="/"
        />

        <Button
          name="language"
          category="header"
          text={langData.Header.language}
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="languageCoursesSection"
          link="/"
        />

        <Button
          name="programming"
          category="header"
          text={langData.Header.programming}
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="programmingSection"
          link="/"
        ></Button>

        <Button
          name="faq"
          category="header"
          text={langData.Header.faq}
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="uppercase"
          section="FAQsection"
          link="/"
        ></Button>

        <Button
          name="contact"
          category="header"
          text={langData.Header.contact}
          type="withoutBorder"
          position=""
          underlinedButton={underlineButton}
          transform="capitalizeFirstLetter"
          section="contactSection"
          link="/"
        ></Button>
        <div className={isOpen ? styles.show : styles.hide}>
          <WebsiteLanguageSwitcher />
        </div>
      </nav>
      <div
        className={`${styles.WebsiteLanguageSwitcher_pc} ${
          !isOpen ? styles.show : styles.hide
        }`}
      >
        <WebsiteLanguageSwitcher />
      </div>
    </header>
  );
}
