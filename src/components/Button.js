import React from "react";
import { useSelector } from "react-redux";
import styles from "./Button.module.css";
import { scroll } from "../helpers/helpers";

function Button(props) {
  const headerHeight = useSelector((state) => state.header.height);

  const name = props.name;
  const text = props.text;
  const type = props.type;
  const position = props.position;
  const underlinedButton = props.underlinedButton;
  const transform = props.transform;
  const section = props.section;
  let sectionPosition = undefined;
  
  const aboutSectionPosition = useSelector((state) => state.aboutSection.yAxisPosition);
  const contactSectionPosition = useSelector((state) => state.contactSection.yAxisPosition);
  const FAQsectionPosition = useSelector((state) => state.FAQsection.yAxisPosition);
  const languageCoursesSectionPosition = useSelector((state) => state.languageCoursesSection.yAxisPosition);
  const programmingSectionPosition = useSelector((state) => state.programmingSection.yAxisPosition);

  const engSubsectionPosition = useSelector((state) => state.engSubsection.yAxisPosition);
  const jpSubsectionPosition = useSelector((state) => state.jpSubsection.yAxisPosition);
  const roSubsectionPosition = useSelector((state) => state.roSubsection.yAxisPosition);

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
  } else if (section === "engSubsection") {
    sectionPosition = engSubsectionPosition - headerHeight + 1; 
  } else if (section === "jpSubsection") {
    sectionPosition = jpSubsectionPosition - headerHeight + 1; 
  } else if (section === "roSubsection") {
    sectionPosition = roSubsectionPosition - headerHeight + 1; 
  }

  // engSubsection

  return (
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
        ${transform === "capitalizeFirstLetter" && styles.capitalize__FirstLetter}
        ${transform === "uppercase" && styles.uppercase}
      `}

      onClick={() => {
        window.scroll({
          top: sectionPosition,
          left: 0,
          behavior: "instant",
        });
      }}
      
    >
      {text}
    </button>
  );
}

export default Button;
