import { React, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeight,
  setYaxisPosition,
} from "../../../../store/programmingSectionSlice";
import styles from "./ProgrammingSection.module.css";
import SectionTitle from "../../../title/SectionTitle";
import { programmingSectionDescription } from "../../../../helpers/data/generalData";

export default function ProgrammingSection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const programmingSectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if(homeWasRendered === "true") {
      dispatch(setHeight(programmingSectionRef.current.offsetHeight));
      
      const rect = programmingSectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition = rect.top + yOffset - parseFloat(getComputedStyle(programmingSectionRef.current).paddingTop);
      dispatch(setYaxisPosition(yPosition));
      console.log("setting the programmingSection position")
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  // const headerHeight = useSelector((state) => state.header.height);
  const description = programmingSectionDescription();


  return (
    <section
      id="programmingSection"
      ref={programmingSectionRef}
      className={styles.programmingSection}
    >
      <div className={styles.title}>
        <SectionTitle text="Dezvoltare software" />
      </div>
      <div className={styles.description}>{description}</div>
    </section>
  );
}
