import React from 'react';
import styles from "./Button.module.css"

function Button(props) {
  return (
    <div className={styles.buttonContainer}>
        <button className={styles.button}>
            {props.text}
        </button>
    </div>
  );
};

export default Button;