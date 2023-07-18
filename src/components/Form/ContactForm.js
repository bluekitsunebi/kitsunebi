import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import buttonstyles from "../Button.module.css";
import enData from "../../helpers/data/lang/en.json";
import jaData from "../../helpers/data/lang/ja.json";
import roData from "../../helpers/data/lang/ro.json";

import {
  setIsFilling,
  setIsSend,
  setIsSending,
  setRecaptchaNeeded,
} from "../../store/formSlice";
//

// ReCAPTCHA Lazy Loading
const LazyReCAPTCHA = React.lazy(() => import("react-google-recaptcha"));

export default function ContactForm(props) {
  let subject = props.subject;
  if (subject !== "contact") {
    subject = `${subject[0]}, ${subject[1]}`;
  }
  let price = props.price;
  let timeframe = props.timeframe;
  const section = props.section;

  const form = useRef();
  const [countryCode, setCountryCode] = useState();

  const handleKeyPress = (e) => {
    const pattern = /^[0-9\b]+$/;
    if (!pattern.test(e.key)) {
      e.preventDefault();
    }
  };

  const RECAPTCHA_KEY = "6Leu5AUmAAAAAJVC7lT0cMLGgy4hzSK2kqRtE2_h";
  const [isRecaptchaCompleted, setIsRecaptchaCompleted] = useState(false);
  const handleRecaptchaChange = (value) => {
    setIsRecaptchaCompleted(true);
  };

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;
  const agree = langData.ContactSection.ContactForm.agree;

  // check when the form starts to be filled
  const isFilling = useSelector((state) => state.form.isFilling);
  const isSend = useSelector((state) => state.form.isSend);
  const isSending = useSelector((state) => state.form.isSending);
  const recaptchaNeeded = useSelector((state) => state.form.recaptchaNeeded);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isRecaptchaCompleted) {
      dispatch(setRecaptchaNeeded(false));
    }
  }, [isRecaptchaCompleted, dispatch]);
  
  const handleFocus = () => {
    dispatch(setIsFilling(true));
    dispatch(setIsSend(false));
  };

  // recaprcha transition
  const [recaptchaClass, setRecaptchaClass] = useState("");
  useEffect(() => {
    if (isFilling) {
      setTimeout(() => {
        setRecaptchaClass("show");
      }, 500);
    } else {
      setRecaptchaClass("");
    }
  }, [isFilling]);

  // send email
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isRecaptchaCompleted) {
      dispatch(setRecaptchaNeeded(true));
      return;
    }
    dispatch(setIsSending(true));

    const phoneInput = e.target.elements.phone;
    const countryCodeInput = e.target.elements.countryCode;
    if (phoneInput.value === "") {
      countryCodeInput.value = "";
    }

    let templateParams = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      timeframe: e.target.elements.timeframe.value,
      price: e.target.elements.price.value,
      message: e.target.elements.message.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      countryCode: e.target.elements.countryCode.value,
      checkbox: e.target.elements.checkbox.value,
      subject: e.target.elements.subject.value,
      language: e.target.elements.language.value,
    };

    let templateId = "";
    if (subject === "contact") {
      templateId = `contactForm_${language}`;
    } else {
      templateId = `registrationForm_${language}`;
    }

    emailjs
      .send(
        "BlueKitsunebiForm",
        templateId,
        templateParams,
        "2kpClbJCkav0Qd87S"
      )
      .then(
        (result) => {
          console.log(result.text);
          dispatch(setIsSend(true));
          dispatch(setIsSending(false));
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.ContactForm}>
      <label className={styles.label}>
        {langData.ContactSection.ContactForm.name}
        <span className={styles.star}>*</span>
      </label>
      <input
        type="text"
        name="firstName"
        autoComplete="given-name"
        onFocus={handleFocus}
        required
      />
      <label className={styles.label}>
        {langData.ContactSection.ContactForm.surname}
        <span className={styles.star}>*</span>
      </label>
      <input
        type="text"
        name="lastName"
        autoComplete="family-name"
        onFocus={handleFocus}
        required
      />
      <label className={styles.label}>
        {langData.ContactSection.ContactForm.email}
        <span className={styles.star}>*</span>
      </label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        onFocus={handleFocus}
        required
      />
      <label style={{ display: section === "contact" && "none" }}>
        {langData.ContactSection.ContactForm.phone}
      </label>

      <div
        className={styles.phoneContainer}
        style={{ display: section === "contact" && "none" }}
      >
        <PhoneInput
          name="countryCode"
          international
          defaultCountry={langData.LanguageCustomCourses.countryCode}
          value={countryCode}
          autoComplete="off"
          onChange={setCountryCode}
          readOnly={true}
          className={`${styles.countryCode}`}
        />

        <input
          name="phone"
          type="text"
          inputMode="numeric"
          autoComplete="new-password"
          maxLength="16"
          pattern="[0-9]*"
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          className={`${styles.phone} ${styles.phoneNumber}`}
        />
      </div>
      <label className={styles.label}>
        {langData.ContactSection.ContactForm.message}
        <span
          className={styles.star}
          style={{ display: section === "languageCourses" && "none" }}
        >
          *
        </span>
      </label>
      <textarea
        name="message"
        rows="8"
        onFocus={handleFocus}
        required={section === "contact" ? true : false}
      />
      <div className={styles.checkboxContainer}>
        <label>
          <input
            type="checkbox"
            // id="gdprContact"
            name="checkbox"
            value="Sunt de acord"
            className={styles.checkbox}
            onFocus={handleFocus}
            required
          />

          {agree[0]}
          <a href="" className={styles.link}>
            {agree[1]}
          </a>
          <span className={styles.star}>*</span>
        </label>
      </div>
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="timeframe" value={timeframe} />
      <input type="hidden" name="price" value={price} />
      <input type="hidden" name="language" value={language} />

      {isFilling && (
        <React.Suspense>
          <div className={`${styles.recaptcha} ${styles[recaptchaClass]}`}>
            <LazyReCAPTCHA
              key={language}
              sitekey={RECAPTCHA_KEY}
              onChange={handleRecaptchaChange}
              className={styles.recaptchaScale}
              hl={language}
            />
          </div>
        </React.Suspense>
      )}

      <div className={styles.confirmationContainer}>
        <div
          className={`${styles.confirmation}
            ${recaptchaNeeded && styles.show}
            ${!isSending && !isSend && styles.hide} 
            ${(isSending || isSend) && styles.show}`}
        >
          {recaptchaNeeded
            ? langData.ContactSection.ContactForm.confirmation.recaptcha
            : isSending && !isSend
            ? langData.ContactSection.ContactForm.confirmation.sending
            : !isSending && isSend
            ? langData.ContactSection.ContactForm.confirmation.sent
            : "..."}
          {}
        </div>
        <div className={styles.buttonContainer}>
          <input
            type="submit"
            value={langData.ContactSection.ContactForm.sendButton}
            className={`${buttonstyles.button__full} ${buttonstyles.Button} ${buttonstyles.capitalize} ${styles.sendButton}`}
          />
        </div>
      </div>
    </form>
  );
}
