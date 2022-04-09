import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CustomRouter from "./route/custom-router";
import history from "./route/my-history";

ReactDOM.render(
  <CustomRouter history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CustomRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
