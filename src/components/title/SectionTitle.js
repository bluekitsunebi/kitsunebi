import React from "react";
import styles from "./SectionTitle.module.css"

export default function SectionTitle(props) {
    const text = props.text
    return (
        <div className={styles.Title}>
          {text}
        </div>
    )
}
