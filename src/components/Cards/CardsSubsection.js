import React from "react";
import styles from "./CardsSubsection.module.css"
import Subtitle from "../title/Subtitle";
import CardsGrid from "../Cards/CardsGrid";
import { languageModulesCards } from "../../helpers/data/cardsData";

export default function CardsSubsection(props) {
    const cards = languageModulesCards();
    const id = props.id;
    return (
        <div className={styles.CardsSubsection} id={id}>

            <div className={styles.subtitle}>
                <Subtitle text="Courses taught in English:"/>
            </div>

            <CardsGrid cards={cards} id={id} />

        </div>
    )
}
