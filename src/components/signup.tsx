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

const Login: React.FC<IProps> = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const { user, setUser } = useAuth();

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    // 在這裡放置您的登入邏輯
    Axios({
      url: "http://gjfruit.tk:8081" + api.signup.url(),
      method: api.signup.method,
      data: {
        username: username,
        password: password,
        email: "",
      },
    })
      .then((res) => {
        navigate("/login");

        toast.success("🦄 Signup Success!", {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => {
        toast.error("🦄 Signup Error!", {
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
    <div className="signup">
      <Header />
      <div className="signup-body">
        <div className="signup-body-lefticon">
          <StickLeftIcon />
        </div>
        <div className="signup-body-window">
          <StickIcon />
          <div className="signup-body-window-title">註冊</div>
          <div className="signup-body-window-enter">
            <form className="signup-body-window-enter-from">
              <div className="signup-body-window-enter-from-signuptext">
                <div className="signup-body-window-enter-from-signuptext-title">
                  使用者帳號
                </div>
                <div className="signup-body-window-enter-from-signuptext-help">
                  使用手機註冊
                </div>
              </div>
              <div className="signup-body-window-enter-from-input">
                <input
                  type="text"
                  placeholder="輸入"
                  className="signup-body-window-enter-from-input-enter"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </div>
              <div className="signup-body-window-enter-from-signuptext">
                <div className="signup-body-window-enter-from-signuptext-title">
                  確認密碼
                </div>
                <div className="signup-body-window-enter-from-signuptext-help"></div>
              </div>
              <div className="signup-body-window-enter-from-input">
                <input
                  type="password"
                  placeholder="輸入密碼"
                  className="signup-body-window-enter-from-input-enter"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </div>
              <div className="signup-body-window-enter-from-signuptext">
                <div className="signup-body-window-enter-from-signuptext-title">
                  密碼
                </div>
                <div className="signup-body-window-enter-from-signuptext-help"></div>
              </div>
              <div className="signup-body-window-enter-from-input">
                <input
                  type="password"
                  placeholder="輸入密碼"
                  className="signup-body-window-enter-from-input-enter"
                  onChange={(e) => setConfrimPassword(e.currentTarget.value)}
                />
              </div>
              {/* <div style={{ margin: "10px 0 0 10px" }}>Validation</div> */}
              <input
                type="submit"
                value="註冊"
                className="signup-body-window-signupbutton"
                onClick={(e) => {
                  handleSubmit(e);
                  navigate("/");
                }}
              />
              <div className="signup-body-window-enter-wrapper">
                <div
                  className="signup-body-window-enter-from-forget-text"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  註冊
                </div>
                <div className="signup-body-window-enter-from-forget-text">
                  忘記密碼？
                </div>
              </div>
            </form>
            <div className="signup-body-window-enter-others">
              <div className="signup-body-window-enter-others-title">
                <div
                  className="signup-body-window-enter-others-title-text"
                  onClick={clickDropDown}
                >
                  其他註冊方式
                  <ArrowIcon />
                </div>
              </div>
              {dropDown === true ? (
                <div className="signup-body-window-enter-others-button">
                  <div className="signup-body-window-enter-others-button-background">
                    <img src={fb} alt="fb" />
                    <div className="signup-body-window-enter-others-button-background-text">
                      Facebook註冊
                    </div>
                  </div>
                  <div className="signup-body-window-enter-others-button-background">
                    <img src={google} alt="google" />
                    <div className="signup-body-window-enter-others-button-background-text">
                      Google註冊
                    </div>
                  </div>
                  <div className="signup-body-window-enter-others-button-background">
                    <img src={apple} alt="apple" />
                    <div className="signup-body-window-enter-others-button-background-text">
                      Apple註冊
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="signup-body-righticon">
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

export default Login;
