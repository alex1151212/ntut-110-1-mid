import StickIcon from "../assets/icons/stick";
import ArrowIcon from "../assets/icons/arrow";
import React, { useState } from "react";
interface IProps {}

const Login: React.FC<IProps> = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const clickDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="login">
      <div className="login-body">
        <div className="login-body-window">
          <StickIcon></StickIcon>
          <div className="login-body-window-title">登入</div>
          <div className="login-body-window-enter">
            <form className="login-body-window-enter-from">
              <div className="login-body-window-enter-from-logintext">
                <div className="login-body-window-enter-from-logintext-title">
                  常用信箱
                </div>
                <div className="login-body-window-enter-from-logintext-help">
                  使用手機登入
                </div>
              </div>
              <div className="login-body-window-enter-from-input">
                <input
                  type="text"
                  placeholder="輸入信箱"
                  className="login-body-window-enter-from-input-enter"
                />
              </div>
              <div className="login-body-window-enter-from-logintext">
                <div className="login-body-window-enter-from-logintext-title">
                  常用信箱
                </div>
                <div className="login-body-window-enter-from-logintext-help"></div>
              </div>
              <div className="login-body-window-enter-from-input">
                <input
                  type="password"
                  placeholder="輸入密碼"
                  className="login-body-window-enter-from-input-enter"
                />
              </div>
              <input
                type="submit"
                value="登入"
                className="login-body-window-loginbutton"
              />
              <div className="login-body-window-enter-from-forget">
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
              {dropDown == true ? (
                <div className="login-body-window-enter-others-button">
                  <div className="login-body-window-enter-others-button-background">
                    <img src="" alt="" />
                    <div className="login-body-window-enter-others-button-background-text">
                      Facebook登入
                    </div>
                  </div>
                  <div className="login-body-window-enter-others-button-background">
                    <img src="" alt="" />
                    <div className="login-body-window-enter-others-button-background-text">
                      Google登入
                    </div>
                  </div>
                  <div className="login-body-window-enter-others-button-background">
                    <img src="" alt="" />
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
      </div>
    </div>
  );
};

export default Login;
