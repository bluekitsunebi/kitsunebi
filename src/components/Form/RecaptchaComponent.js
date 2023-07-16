import React, { useState } from "react";
import makeAsyncScriptLoader from "react-async-script";
import ReCAPTCHA from "react-google-recaptcha";

let ReCAPTCHAInstance = null;

export default function RecaptchaComponent(props) {
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  const recaptchaLoaded = () => {
    if (!props.recaptchaCompletedOnce) {
      ReCAPTCHAInstance = require("react-google-recaptcha").default;
      setIsRecaptchaLoaded(true);
    }
  };

  const AsyncRecaptcha = makeAsyncScriptLoader(
    "https://www.google.com/recaptcha/api.js",
    {
      onScriptLoad: recaptchaLoaded,
    }
  )(ReCAPTCHA);

  return (
    !props.recaptchaCompletedOnce && (
      <AsyncRecaptcha
        key={props.recaptchaKey}
        sitekey={props.sitekey}
        onChange={props.onChange}
        className={props.className}
        hl={props.hl}
      />
    )
  );
}
