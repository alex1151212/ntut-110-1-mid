/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import EditIcon from "../assets/img/edit.png";
import NotifyIcon from "../assets/img/notify.png";
import ProfileIcon from "../assets/img/profile.png";
import ArrowIcon from "../assets/img/arrow.png";
import SearchIcon from "../assets/img/search.png";

interface IProps {}

const Header: React.FC<IProps> = () => {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        className="header-logo"
        style={{ cursor: "pointer" }}
        onClick={(e) => navigate("/home")}
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
      <div className="header-buttons">
        {location.pathname === "/login" ? (
          <></>
        ) : (
          <>
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
          </>
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
              <li>
                <p>登出</p>
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
