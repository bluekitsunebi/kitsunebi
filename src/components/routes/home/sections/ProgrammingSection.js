import { React, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeight, setYaxisPosition } from "../../../../store/programmingSectionSlice";
import styles from "./ProgrammingSection.module.css";
import SectionTitle from "../../../title/SectionTitle";

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
    dispatch(setYaxisPosition(programmingSectionRef.current.getBoundingClientRect().top + window.pageYOffset ));
  }, [dispatch]);

  const headerHeight = useSelector((state) => state.header.height);

  return (
    <section id="programmingSection" ref={programmingSectionRef} className={styles.programmingSection}>
      <SectionTitle text="Programming" />
    </section>
  );
}
