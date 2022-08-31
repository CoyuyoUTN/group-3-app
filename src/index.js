import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
