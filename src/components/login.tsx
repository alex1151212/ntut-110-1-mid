/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import StickIcon from "../assets/icons/stick";
import StickLeftIcon from "../assets/icons/stickleft";
import StickRightIcon from "../assets/icons/stickright";
import ArrowIcon from "../assets/icons/arrow";
import fb from "../assets/img/fb 1.png";
import google from "../assets/img/google 1.png";
import apple from "../assets/img/apple 1.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { instance } from "../enviroment/axios";
import Axios from "axios";
import { api } from "../enviroment/api";
import { ToastContainer, toast } from "react-toastify";
import Header from "./header";

interface IProps {}

const Signup: React.FC<IProps> = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useAuth();

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    // 在這裡放置您的登入邏輯
    Axios({
      url: "http://gjfruit.tk:8081" + api.login.url(),
      method: api.login.method,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: {
        grant_type: "",
        username: username,
        password: password,
        scope: "",
        client_id: "",
        client_secret: "",
      },
    })
      .then((res) => {
        const { access_token, user } = res.data;
        localStorage.setItem("token", access_token);

        setUser(user);

        instance.defaults.headers.common["Authorization"] =
          "Bearer " + access_token || "";

        navigate("/");

        // toast.success("🦄 Login Success!", {
        //   position: "top-center",
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      })
      .catch(() => {
        toast.error("🦄 Login Error!", {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  const clickDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="login">
      <Header />
      <div className="login-body">
        <div className="login-body-lefticon">
          <StickLeftIcon />
        </div>
        <div className="login-body-window">
          <StickIcon />
          <div className="login-body-window-title">登入</div>
          <div className="login-body-window-enter">
            <form className="login-body-window-enter-from">
              <div className="login-body-window-enter-from-logintext">
                <div className="login-body-window-enter-from-logintext-title">
                  使用者帳號
                </div>
                <div className="login-body-window-enter-from-logintext-help">
                  使用手機登入
                </div>
              </div>
              <div className="login-body-window-enter-from-input">
                <input
                  type="text"
                  placeholder="輸入"
                  className="login-body-window-enter-from-input-enter"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </div>
              <div className="login-body-window-enter-from-logintext">
                <div className="login-body-window-enter-from-logintext-title">
                  密碼
                </div>
                <div className="login-body-window-enter-from-logintext-help"></div>
              </div>
              <div className="login-body-window-enter-from-input">
                <input
                  type="password"
                  placeholder="輸入密碼"
                  className="login-body-window-enter-from-input-enter"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </div>
              <input
                type="submit"
                value="登入"
                className="login-body-window-loginbutton"
                onClick={(e) => {
                  handleSubmit(e);
                  navigate("/");
                }}
              />
              <div className="login-body-window-enter-wrapper">
                <div
                  className="login-body-window-enter-from-forget-text"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  註冊
                </div>
                <div className="login-body-window-enter-from-forget-text">
                  忘記密碼？
                </div>
              </div>
            </form>
            <div className="login-body-window-enter-others">
              <div className="login-body-window-enter-others-title">
                <div
                  className="login-body-window-enter-others-title-text"
                  onClick={clickDropDown}
                >
                  其他登入方式
                  <ArrowIcon />
                </div>
              </div>
              {dropDown === true ? (
                <div className="login-body-window-enter-others-button">
                  <div className="login-body-window-enter-others-button-background">
                    <img src={fb} alt="fb" />
                    <div className="login-body-window-enter-others-button-background-text">
                      Facebook登入
                    </div>
                  </div>
                  <div className="login-body-window-enter-others-button-background">
                    <img src={google} alt="google" />
                    <div className="login-body-window-enter-others-button-background-text">
                      Google登入
                    </div>
                  </div>
                  <div className="login-body-window-enter-others-button-background">
                    <img src={apple} alt="apple" />
                    <div className="login-body-window-enter-others-button-background-text">
                      Apple登入
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="login-body-righticon">
          <StickRightIcon />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Signup;
