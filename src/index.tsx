import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Login from "./components/login";
import Post from "./components/post";
import Home from "./components/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./components/AuthLayout";
import { AuthProvider } from "./hook/useAuth";
import Signup from "./components/signup";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
