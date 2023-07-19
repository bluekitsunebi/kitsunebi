import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const loadFontAsync = () => {
  const font = new FontFace("SHANTELL_SANS", 
    "url(./src/fonts/Shantell_Sans/ShantellSans-VariableFont_BNCE,INFM,SPAC,wght.ttf)", 
    {
      style: 'normal',
      weight: '400'
    }
  );

  font.load().then(loadedFont => {
    document.fonts.add(loadedFont);
  }).catch(error => {
    console.error("Failed to load font: ", error);
  });
};

loadFontAsync();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
