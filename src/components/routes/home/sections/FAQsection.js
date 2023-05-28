import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHeight, setYaxisPosition } from "../../../../store/FAQsectionSlice";
import styles from "./FAQsection.module.css";
import SectionTitle from "../../../title/SectionTitle";

function FAQsection({ onRender }) {
  const homeWasRendered = useSelector((state) => state.home.wasRendered);
  const FAQsectionRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if(homeWasRendered === "true") {
      dispatch(setHeight(FAQsectionRef.current.offsetHeight));
  
      const rect = FAQsectionRef.current.getBoundingClientRect();
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      const yPosition = rect.top + yOffset - parseFloat(getComputedStyle(FAQsectionRef.current).paddingTop);
      dispatch(setYaxisPosition(yPosition));
      console.log("setting the faqSection position")
    }
    if (typeof onRender === "function") {
      onRender();
    }
  }, [onRender, homeWasRendered]);

  return (
    <section id="faqSection" ref={FAQsectionRef} className={styles.faqSection}>
      <SectionTitle text="FAQ" />
      <div className={styles.description}>
        <div className={styles.questionAnswerContainer}>
          <div>Q: Cum se efectueaza plata?</div>
          <div>
            A: Plata se efectueaza dupa sedinta gratis de inceput, semnarea
            contractului si primirea facturii, in avans pentru un anumit numar
            de sedinte (6 pentru regim normal , 8 pentru intensiv), prin
            transfer bancar (gasiti datele in rubrica contact), punand numele
            elevului in descriere.{" "}
          </div>
        </div>
        <div className={styles.questionAnswerContainer}>
          <div>
            Q: Daca nu pot intra intr-o zi, ce se intampla cu sedinta platita?
          </div>
          <div>
            A: Pentru cei ce au ales un program individual de studiu, este
            posibila mutarea acesteia in alta zi din urmatoarele 4 saptamani.
            Cei carora li se preda in sistem grup vor pierde din pacate sedinta
            platita daca motivul absentarii nu este unul strict obiectiv.
          </div>
        </div>
        <div className={styles.questionAnswerContainer}>
          <div>
            Q: Cum pot beneficia de asistenta oferita in afara orelor de curs?
          </div>
          <div>
            A: Ne puteti pune intrebari privind limba studiata prin mail sau
            prin chat pe orice retea de socializare. Aveti dreptul la cate 4
            intrebari deodata iar raspunsul va veni in decurs de 24 de ore.
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQsection;
