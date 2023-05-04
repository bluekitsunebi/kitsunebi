import React from "react";
import styles from "./Button.module.css";
import { scroll } from "../helpers/helpers";

function Button(props) {
  const name = props.name;
  const text = props.text;
  const type = props.type;
  const position = props.position;
  const underlinedButton = props.underlinedButton;
  const transform = props.transform;
  const section = props.section;

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
        scroll(section, "instant");
      }}
    >
      {text}
    </button>
  );
}

export default Button;
