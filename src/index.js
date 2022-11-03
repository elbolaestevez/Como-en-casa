import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./assets/styles/styles.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
