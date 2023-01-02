/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, SetStateAction } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import EditIcon from "../assets/img/edit.png";
import NotifyIcon from "../assets/img/notify.png";
import ProfileIcon from "../assets/img/profile.png";
import ArrowIcon from "../assets/img/arrow.png";
import SearchIcon from "../assets/img/search.png";
import OptionIcon from "../assets/img/option-white.png";
import { useAuth } from "../hook/useAuth";
interface IProps {
  setLeftNavBar?: React.Dispatch<SetStateAction<boolean>>;
  leftNavBar?: boolean;
  headerOption?: boolean;
}

const Header: React.FC<IProps> = ({
  setLeftNavBar,
  leftNavBar,
  headerOption = true,
}) => {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, logout, user } = useAuth();

  useEffect(() => {
    setIsDrop(false);
  }, []);
  return (
    <div className="header">
      {headerOption && (
        <div
          className="header-option"
          onClick={() => {
            setLeftNavBar &&
              leftNavBar !== undefined &&
              setLeftNavBar(!leftNavBar);
          }}
        >
          <img src={OptionIcon} alt="" />
        </div>
      )}

      <div
        className="header-logo"
        style={{ cursor: "pointer" }}
        onClick={(e) => navigate("/")}
      >
        Trahsu
      </div>
      <div className="header-search-bar-wrapper">
        <div className="header-search-bar">
          <input type={"text"} placeholder="搜尋" />
          <div>
            <img src={SearchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="header-buttons-wrapper">
        {location.pathname === "/login" ? (
          <></>
        ) : (
          <div className="header-buttons-function">
            <div>
              <img src={EditIcon} alt="" onClick={() => navigate("/post")} />
            </div>
            <div>
              <img src={NotifyIcon} alt="" />
            </div>
            <div>
              <img
                src={ProfileIcon}
                alt=""
                onClick={() => navigate("/login")}
              />
            </div>
          </div>
        )}

        <div
          onClick={() => setIsDrop(!isDrop)}
          className={`${isDrop ? "active" : ""}`}
        >
          <img src={ArrowIcon} alt="" />
        </div>
        {isDrop ? (
          <div className="header-buttons-dropdown">
            <ul>
              <li>
                <p>服務條款</p>
              </li>
              <li>
                <p>常見問題</p>
              </li>
              <li>
                <p>回報問題</p>
              </li>
              <li>
                <p>徵才</p>
              </li>
              <li>
                <p>商業合作</p>
              </li>
              <li>
                <p>免費下載app</p>
              </li>
              <li>
                <p>設定</p>
              </li>
              <li
                onClick={() => {
                  navigate("/login");
                  logout();
                }}
              >
                <p>{user ? "登出" : "登入"}</p>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
