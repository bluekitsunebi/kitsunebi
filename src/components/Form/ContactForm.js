import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import buttonstyles from "../Button.module.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm(props) {
  const subject = props.subject;
  const form = useRef();
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
      <label>First name</label>
      <input type="text" name="form_firstName" autoComplete="given-name" onFocus={() => setIsSend("false")} required/>
      <label>Last name</label>
      <input type="text" name="form_lastName" autoComplete="family-name" onFocus={() => setIsSend("false")} required/>
      <label>Email</label>
      <input type="email" name="form_email" autoComplete="email" onFocus={() => setIsSend("false")} required/>
      <label>Message</label>
      <textarea name="message" rows="8" onFocus={() => setIsSend("false")} required/>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" id="gdprContact" name="form_checkbox" value="agree" className={styles.checkbox} onFocus={() => setIsSend("false")} required/>
        <label>
          I agree to the <a href="" className={styles.link}>Confidentiality and GDPR Policy</a>
        </label>
      </div>
      <input type="hidden" name="subject" value={subject} />

      <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={handleRecaptchaChange} className={styles.recaptcha} />

      <div className={styles.confirmationContainer}>
        <div className={`${styles.confirmation} ${isSend === "false" && styles.hide} ${isSend === "true" && styles.show}`}>The message was sent!</div>
        <div className={styles.buttonContainer}>
          <input type="submit" value="send" className={`${buttonstyles.button__full} ${buttonstyles.Button} ${buttonstyles.capitalize} ${styles.sendButton}`} />
        </div>
      </div>
    </form>
  );
}
