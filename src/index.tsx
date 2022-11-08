import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./components/app";
import Sample1 from "./components/login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Sample1 />
  </React.StrictMode>
);
