import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./assets/styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider  store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
