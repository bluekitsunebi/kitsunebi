import React from "react";
import styles from "./Subtitle.module.css"

export default function Subtitle(props) {
    const text = props.text
    return (
        <div className={styles.Subtitle}>
          {text}
        </div>
    )
}
