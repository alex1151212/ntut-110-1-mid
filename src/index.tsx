import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./components/App";
import Header from "./components/header";
import Login from "./components/login";
import Post from "./components/post";
import Home from "./components/home";

import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
