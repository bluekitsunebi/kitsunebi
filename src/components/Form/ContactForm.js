import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import buttonstyles from "../Button.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import enData from "../../helpers/data/lang/en.json";
import jaData from "../../helpers/data/lang/ja.json";
import roData from "../../helpers/data/lang/ro.json";

export default function ContactForm(props) {
  let subject = props.subject;
  let price = props.price;
  let timeframe = props.timeframe;
  let answer = { ...props.answer };

  //formatting answer
  let hello = answer.hello;
  let punctuation = answer.punctuation;
  let main = answer.main;
  let ending = answer.ending;
  let signature = answer.signature;
  const section = props.section;

  const form = useRef();
  const [countryCode, setCountryCode] = useState();

  const handleKeyPress = (e) => {
    const pattern = /^[0-9\b]+$/;
    if (!pattern.test(e.key)) {
      e.preventDefault();
    }
  };

  const [isSend, setIsSend] = useState("false");
  const RECAPTCHA_KEY = "6Leu5AUmAAAAAJVC7lT0cMLGgy4hzSK2kqRtE2_h";
  const [isRecaptchaCompleted, setIsRecaptchaCompleted] = useState(false);
  const handleRecaptchaChange = (value) => {
    setIsRecaptchaCompleted(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isRecaptchaCompleted) {
      return;
    }

    const phoneInput = e.target.elements.phone;
    const countryCodeInput = e.target.elements.countryCode;
    if (phoneInput.value === "") {
      countryCodeInput.value = "";
    }

    let templateParams = {
      hello: e.target.elements.hello.value,
      firstName: e.target.elements.firstName.value, //
      punctuation: e.target.elements.punctuation.value,
      main: e.target.elements.main.value,
      ending: e.target.elements.ending.value,
      signature: e.target.elements.signature.value,
      timeframe: e.target.elements.timeframe.value,
      price: e.target.elements.price.value,
      message: e.target.elements.message.value, //
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      countryCode: e.target.elements.countryCode.value,
      checkbox: e.target.elements.checkbox.value, //
      lastName: e.target.elements.lastName.value, //
      subject: e.target.elements.subject.value, //
      language: e.target.elements.language.value,
    };
    console.log(templateParams)

    emailjs
      .send(
        "BlueKitsunebiForm",
        "BlueKitsunebiForm",
        templateParams,
        "2kpClbJCkav0Qd87S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend("true");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // get the website language
  let language = useSelector((state) => state.websiteLanguage.language);
  let langData =
    language === "en" ? enData : language === "ja" ? jaData : roData;
  const agree = langData.ContactSection.ContactForm.agree;

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
        onFocus={() => setIsSend("false")}
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
        onFocus={() => setIsSend("false")}
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
        onFocus={() => setIsSend("false")}
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
          onFocus={() => setIsSend("false")}
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
        onFocus={() => setIsSend("false")}
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
            onFocus={() => setIsSend("false")}
            required
          />
          {agree[0]}
          <a href="" className={styles.link}>
            {agree[1]}
          </a>
        </label>
      </div>
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="timeframe" value={timeframe} />
      <input type="hidden" name="price" value={price} />
      <input type="hidden" name="hello" value={hello} />
      <input type="hidden" name="punctuation" value={punctuation} />
      <input type="hidden" name="main" value={main} />
      <input type="hidden" name="ending" value={ending} />
      <input type="hidden" name="signature" value={signature} />
      <input type="hidden" name="language" value={language} />

      <ReCAPTCHA
        key={language}
        sitekey={RECAPTCHA_KEY}
        onChange={handleRecaptchaChange}
        className={styles.recaptcha}
        hl={language}
      />

      <div className={styles.confirmationContainer}>
        <div
          className={`${styles.confirmation} ${
            isSend === "false" && styles.hide
          } ${isSend === "true" && styles.show}`}
        >
          {langData.ContactSection.ContactForm.confirmation}
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
