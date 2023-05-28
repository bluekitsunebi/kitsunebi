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
    if (homeWasRendered === "true") {
      const computedStyle = getComputedStyle(programmingSectionRef.current);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);
      const totalHeight =
        programmingSectionRef.current.offsetHeight + paddingTop + paddingBottom;
      dispatch(setHeight(totalHeight));

      const rect = programmingSectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition =
        rect.top +
        yOffset;
      dispatch(setYaxisPosition(yPosition));
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
