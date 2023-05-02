import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import buttonstyles from "../Button.module.css";

export default function ContactForm(props) {
  const form = useRef();

  const [isSend, setIsSend] = useState("false");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "kitsunebiContact",
        "contactForm",
        form.current,
        "emF53fN-efJlSe2Oj"
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
      <label>Name</label>
      <input type="text" name="form_name" autocomplete="name" onFocus={() => setIsSend("false")} required/>
      <label>Email</label>
      <input type="email" name="form_email" onFocus={() => setIsSend("false")} required/>
      <label>Message</label>
      <textarea name="message" rows="7" onFocus={() => setIsSend("false")} required/>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" id="gdprContact" name="form_checkbox" value="agree" className={styles.checkbox} onFocus={() => setIsSend("false")} required/>
        <label for="gdprContact">
          I agree to the <a href="" className={styles.link}>Confidentiality and GDPR Policy</a>
        </label>
      </div>

      <div className={styles.confirmationContainer}>
        <div className={`${styles.confirmation} ${isSend === "false" && styles.hide} ${isSend === "true" && styles.show}`}>The message was sent!</div>
        <div className={styles.buttonContainer}>
          <input type="submit" value="send" className={`${buttonstyles.button__full} ${buttonstyles.Button} ${buttonstyles.capitalize} ${styles.sendButton}`} />
        </div>
      </div>
      
    </form>
  );
}
