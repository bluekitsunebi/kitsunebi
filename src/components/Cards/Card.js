import React, { useEffect, forwardRef, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./Card.module.css";
import Button from "../Button";
import enData from "../../helpers/data/lang/en.json";
import jaData from "../../helpers/data/lang/ja.json";
import roData from "../../helpers/data/lang/ro.json";

const Card = forwardRef((props, ref) => {
  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;
  let payment = [...langData.LanguageCoursesSection.Cards.payment];

  const cardRef = useRef(null);
  let isInView;

  const id = props.id;
  console.log(id);
  const courseLanguage = props.courseLanguage;
  const module = props.module;
  const title = props.title;
  const lessons = props.lessons;
  const details = [...props.details];
  let priceAndTime = [...langData.LanguageCoursesSection.Cards[courseLanguage][module].price];
  const [timeframe, setTimeframe] = useState(priceAndTime[0][0]);
  const [price, setPrice] = useState(priceAndTime[0][1]);
  const total = props.total;
  const buttonText = props.buttonText;
  const buttonType = props.buttonType;
  const buttonTransform = props.buttonTransform;
  const link = props.link;
  const isGreyed =
    (id === "CardsSubsectionRomanian" || id === "CardsSubsectionEnglish") &&
    buttonType === "greyedOut";
  const slash = !isGreyed ? "/" : "";

  useEffect(() => {
    function animate() {
      let scrollY = window.scrollY || window.pageYOffset;
      let scrollPosition = scrollY + window.innerHeight;
      console.log(ref.current);

      if (ref.current) {
        let elementPosition = ref.current.getBoundingClientRect().top + scrollY;
        if (scrollPosition > elementPosition) {
          isInView = true;
          console.log(ref, `is animated ${id}`)
        } else {
          isInView = false;
          console.log(ref, `isn't in view`)
        }
      }
    }

    document.addEventListener("scroll", animate);
    return () => {
      document.removeEventListener("scroll", animate);
    };
  });

  // SELECT LESSON DURATION
  const [selectedValue, setSelectedValue] = useState("oneHour");

  function selectTimeframe(event) {
    const el = event.target;
    setSelectedValue(el.options[el.selectedIndex].value);
  }

  // change default value for timeframe when language changes
  useEffect(() => {
    priceAndTime = [...langData.LanguageCoursesSection.Cards[courseLanguage][module].price];
    setTimeframe(priceAndTime[0][0]);
    setPrice(priceAndTime[0][1]);
}, [langData]);

useEffect(() => {
    switch (selectedValue) {
      case "oneHour":
        setTimeframe(priceAndTime[0][0]);
        setPrice(priceAndTime[0][1]);
        break;
      case "oneHour30min":
        setTimeframe(priceAndTime[1][0]);
        setPrice(priceAndTime[1][1]);
        break;
      case "twoHours":
        setTimeframe(priceAndTime[2][0]);
        setPrice(priceAndTime[2][1]);
        break;
      default:
        console.error("Unexpected option selected");
    }
}, [selectedValue, langData]);
  

  return (
    <div
      ref={ref}
      className={`
      ${styles.Card}
      ${id === "CardsSubsectionEnglish" && styles.Card__eng}
      ${id === "CardsSubsectionJapanese" && styles.Card__jp}
      ${id === "CardsSubsectionRomanian" && styles.Card__ro}
      ${isInView ? styles.fadeIn : null}
      `}
    >
      <div className={styles.cardContainer}>
        <div
          className={`
          ${styles.titleContainer}
          ${id === "CardsSubsectionEnglish" && styles.titleContainer__eng}
          ${id === "CardsSubsectionJapanese" && styles.titleContainer__jp}
          ${id === "CardsSubsectionRomanian" && styles.titleContainer__ro}
          `}
        >
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.lessons}>{lessons}</div>
        <div className={styles.detailsContainer}>
          <ul className={styles.details}>
            {details.map((item, index) => (
              <li key={`${id}_${title}_${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        {/* dropdown */}
        <p className={`${styles.selectTimeframe} ${(isGreyed || module === 'groupCustomJapanese') && styles.hide}`}>
          {langData.LanguageCoursesSection.Cards.selectTimeframe}
        </p>
        <select
          className={`${styles.dropdown} ${(isGreyed || module === 'groupCustomJapanese') && styles.hide}`}
          name="timeframe"
          id="timeframe"
          value={selectedValue}
          onChange={selectTimeframe}
        >
          <option value="oneHour" className={styles.option}>
            {priceAndTime[0][0]}
          </option>
          <option value="oneHour30min" className={styles.option}>
            {priceAndTime[1][0]}
          </option>
          <option value="twoHours" className={styles.option}>
            {priceAndTime[2][0]}
          </option>
        </select>

        {/* price */}
        <div className={styles.priceContainer}>
          <div className={styles.price}>{price}</div>
          <div className={styles.slash}>{slash}</div>
          <div className={styles.timeframe}>{timeframe}</div>
        </div>

        <div className={styles.total}>
          {(id === "CardsSubsectionRomanian" ||
            id === "CardsSubsectionEnglish") &&
          buttonType === "greyedOut"
            ? ""
            : `${payment[0]}${total}${payment[1]}`}
        </div>

        <div className={styles.Button}>
          <Button
            name={buttonText}
            text={buttonText}
            type={buttonType}
            transform={buttonTransform}
            subsection={id}
            link={link}
            courseLanguage={courseLanguage}
            module={module}
            selectedValue={selectedValue}
          />
        </div>
      </div>
    </div>
  );
});

export default Card;
