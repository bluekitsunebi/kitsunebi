import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Button.module.css";
// import { scroll } from "../helpers/helpers";
import { setLocation, setLink, setSection, switchWasClicked } from "../store/routerSlice";
import { setMenu } from "../store/headerSlice";

function Button(props) {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  
  const headerHeight = useSelector((state) => state.header.height);

  const name = props.name;
  const text = props.text;
  const type = props.type;
  const position = props.position;
  const underlinedButton = props.underlinedButton;
  const transform = props.transform;
  const section = props.section;
  const link = props.link === undefined ? "*" : props.link;
  const category = props.category;
  const card = props.card;
  let sectionPosition = undefined;

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

  if (section === "aboutSection") {
    sectionPosition = aboutSectionPosition - headerHeight + 1;
  } else if (section === "contactSection") {
    sectionPosition = contactSectionPosition - headerHeight + 1;
  } else if (section === "FAQsection") {
    sectionPosition = FAQsectionPosition - headerHeight + 1;
  } else if (section === "languageCoursesSection") {
    sectionPosition = languageCoursesSectionPosition - headerHeight + 1;
  } else if (section === "programmingSection") {
    sectionPosition = programmingSectionPosition - headerHeight + 1;
  } else if (section === "heroSection") {
    sectionPosition = 0;
  }

  let isOpen = useSelector((state) => state.header.isOpen);

  const handleClick = () => {
    window.scroll({
      top: sectionPosition,
      left: 0,
      behavior: "instant",
    });
    dispatch(setLocation(location));
    dispatch(setLink(link));
    dispatch(setSection(section));
    dispatch(switchWasClicked());
    if(category === "header"){
      dispatch(setMenu());
    }
  };

  return (
    <Link to={link}>
      <button
        className={`
          ${styles.Button}
          ${type === "withoutBorder" && styles.button__withoutBorder}
          ${type === "empty" && styles.button__empty}
          ${type === "empty__colored" && styles.button__emptyColored}
          ${type === "full" && styles.button__full}
          ${type === "greyedOut" && styles.button__greyedOut}
          ${position === "left" && styles.left}
          ${position === "right" && styles.right}
          ${name === underlinedButton && styles.underline}
          ${transform === "capitalize" && styles.capitalize}
          ${
            transform === "capitalizeFirstLetter" &&
            styles.capitalize__FirstLetter
          }
          ${transform === "uppercase" && styles.uppercase}
        `}
        disabled={type === "greyedOut"}
        onClick={handleClick}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
