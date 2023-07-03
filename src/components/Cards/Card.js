import React, { useEffect, forwardRef, useState  } from "react";
import styles from "./Card.module.css";
import Button from "../Button";

const Card = forwardRef((props, ref) => {
  // const cardRef = useRef(null);
  let isInView;

  const id = props.id;
  const title = props.title;
  const lessons = props.lessons;
  const details = [...props.details];
  const priceAndTime = [...props.price];
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
      // console.log(ref.current);

      if (ref.current) {
        let elementPosition = ref.current.getBoundingClientRect().top + scrollY;
        if (scrollPosition > elementPosition) {
          isInView = true;
          // console.log(ref, "is animated")
        } else {
          isInView = false;
          // console.log(ref, "isn't in view")
        }
      }
    }

    document.addEventListener("scroll", animate);
    return () => {
      document.removeEventListener("scroll", animate);
    };
  });

  // SELECT LESSON DURATION

  function selectTimeframe(event) {
    const el = event.target;
    const selectedValue = el.options[el.selectedIndex].value;
    switch (selectedValue) {
      case 'oneHour':
        oneHour();
        break;
      case 'oneHour30min':
        oneHour30min();
        break;
      case 'twoHours':
        twoHours();
        break;
      default:
        console.error('Unexpected option selected');
    }
  }

  function oneHour() {
    setTimeframe(priceAndTime[0][0]);
    setPrice(priceAndTime[0][1]);
  }

  function oneHour30min() {
    setTimeframe(priceAndTime[1][0]);
    setPrice(priceAndTime[1][1]);
  }

  function twoHours() {
    setTimeframe(priceAndTime[2][0]);
    setPrice(priceAndTime[2][1]);
  }

  return (
    <div
      ref={ref}
      className={`
      ${styles.Card}
      ${id === "CardsSubsectionEnglish" && styles.Card__eng}
      ${id === "CardsSubsectionJapanese" && styles.Card__jp}
      ${id === "CardsSubsectionRomanian" && styles.Card__ro}
      ${isInView && styles.fadeIn}
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
        <p className={styles.selectTimeframe}>Selecteaza durata unei lectii:</p>
        <select
          
          className={styles.dropdown}
          name="timeframe"
          id="timeframe"
          onChange={selectTimeframe}
        >
          <option value="oneHour" selected className={styles.option}>
            1 ora
          </option>
          <option value="oneHour30min"  className={styles.option}>
            1,5 ore (recomandat)
          </option>
          <option value="twoHours" className={styles.option}>
            2 ore
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
            : `(plata o data la ${total} lectii)`}
        </div>

        <div className={styles.Button}>
          <Button
            name={buttonText}
            text={buttonText}
            type={buttonType}
            // position=""
            // underlinedButton=""
            transform={buttonTransform}
            subsection={id}
            link={link}
            timeframe={timeframe}
            price={price}
          />
        </div>
      </div>
    </div>
  );
});

export default Card;
