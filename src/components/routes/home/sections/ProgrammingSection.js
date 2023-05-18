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
  useEffect(() => {
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender]);

  const programmingSectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeight(programmingSectionRef.current.offsetHeight));
    dispatch(
      setYaxisPosition(
        programmingSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset
      )
    );
  }, [dispatch]);

  const headerHeight = useSelector((state) => state.header.height);
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
