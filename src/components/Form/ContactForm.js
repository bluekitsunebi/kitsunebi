import React, { useRef, useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import buttonstyles from "../Button.module.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm(props) {
  const subject = props.subject;
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

    emailjs
      .sendForm(
        "BlueKitsunebiForm",
        "BlueKitsunebiForm",
        form.current,
        "2kpClbJCkav0Qd87S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend("true");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.ContactForm}>
      <label className={styles.label}>
        First name<span className={styles.star}>*</span>
      </label>
      <input
        type="text"
        name="form_firstName"
        autoComplete="given-name"
        onFocus={() => setIsSend("false")}
        required
      />
      <label className={styles.label}>
        Last name<span className={styles.star}>*</span>
      </label>
      <input
        type="text"
        name="form_lastName"
        autoComplete="family-name"
        onFocus={() => setIsSend("false")}
        required
      />
      <label className={styles.label}>
        Email<span className={styles.star}>*</span>
      </label>
      <input
        type="email"
        name="form_email"
        autoComplete="email"
        onFocus={() => setIsSend("false")}
        required
      />
      <label style={{ display: section === "contact" && "none" }}>
        Phone number
      </label>

      <div
        className={styles.phoneContainer}
        style={{ display: section === "contact" && "none" }}
      >
        <PhoneInput
          name="form_countryCode"
          international
          defaultCountry="RO"
          value={countryCode}
          autoComplete="off"
          onChange={setCountryCode}
          readOnly={true}
          className={`${styles.countryCode}`}
        />

        <input
          name="form_phone"
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
        Message
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
        <input
          type="checkbox"
          id="gdprContact"
          name="form_checkbox"
          value="agree"
          className={styles.checkbox}
          onFocus={() => setIsSend("false")}
          required
        />
        <label>
          I agree to the{" "}
          <a href="" className={styles.link}>
            Confidentiality and GDPR Policy
          </a>
        </label>
      </div>
      <input type="hidden" name="subject" value={subject} />

      <ReCAPTCHA
        sitekey={RECAPTCHA_KEY}
        onChange={handleRecaptchaChange}
        className={styles.recaptcha}
      />

      <div className={styles.confirmationContainer}>
        <div
          className={`${styles.confirmation} ${
            isSend === "false" && styles.hide
          } ${isSend === "true" && styles.show}`}
        >
          The message was sent!
        </div>
        <div className={styles.buttonContainer}>
          <input
            type="submit"
            value="send"
            className={`${buttonstyles.button__full} ${buttonstyles.Button} ${buttonstyles.capitalize} ${styles.sendButton}`}
          />
        </div>
      </div>
    </form>
  );
}
