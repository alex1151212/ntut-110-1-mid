import { useState, useEffect } from "react";

import EditIcon from "../assets/img/edit.png";
import NotifyIcon from "../assets/img/notify.png";
import ProfileIcon from "../assets/img/profile.png";
import ArrowIcon from "../assets/img/arrow.png";
import SearchIcon from "../assets/img/search.png";

interface IProps {}

const Header: React.FC<IProps> = () => {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  return (
    <div className="header">
      <div className="header-logo">Trahsu</div>
      <div className="header-search-bar-wrapper">
        <div className="header-search-bar">
          <input type={"text"} placeholder="搜尋" />
          <div>
            <img src={SearchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="header-buttons">
        <div>
          <img src={EditIcon} alt="" />
        </div>
        <div>
          <img src={NotifyIcon} alt="" />
        </div>
        <div>
          <img src={ProfileIcon} alt="" />
        </div>
        <div
          onClick={() => setIsDrop(!isDrop)}
          className={`${isDrop ? "active" : ""}`}
        >
          <img src={ArrowIcon} alt="" />
        </div>
        {isDrop ? (
          <div className="header-buttons-dropdown">
            <ul>
              <li>服務條款</li>
              <li>常見問題</li>
              <li>回報問題</li>
              <li>徵才</li>
              <li>商業合作</li>
              <li>免費下載app</li>
              <li>設定</li>
              <li>登出</li>
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
