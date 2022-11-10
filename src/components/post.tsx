import ArrowPurpleIcon from "../assets/img/arrowPurple.png";
import VideoIcon from "../assets/img/video.png";
import SmileIcon from "../assets/img/smile.png";
import PhotoIcon from "../assets/img/photo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface IProps {}

const Post: React.FC<IProps> = () => {
  const navigate = useNavigate();
  const [barState, setBarState] = useState<string>("text");
  return (
    <>
      <div className="post">
        <div className="post-window">
          <div className="post-window-bar">
            <ul>
              <li
                className={`${barState === "text" ? "active" : ""}`}
                onClick={() => setBarState("text")}
              >
                文章
              </li>
              <li
                onClick={() => setBarState("image")}
                className={`${barState === "image" ? "active" : ""}`}
              >
                圖片
              </li>
              <li
                onClick={() => setBarState("video")}
                className={`${barState === "video" ? "active" : ""}`}
              >
                影片
              </li>
              <li
                onClick={() => setBarState("link")}
                className={`${barState === "link" ? "active" : ""}`}
              >
                連結
              </li>
              <li
                onClick={() => setBarState("vote")}
                className={`${barState === "vote" ? "active" : ""}`}
              >
                發起投票
              </li>
            </ul>
          </div>
          <div className="post-window-select-bar">
            <div className="post-window-select-bar-selecter">
              <div className="post-window-select-bar-topic-wrapper">
                <p>點此選擇發文看板</p>
                <img src={ArrowPurpleIcon} alt="" />
              </div>
              <div className="post-window-select-bar-role-wrapper">
                <div className="post-window-select-bar-role-avatar"></div>
                <div className="post-window-select-bar-role-dropdown">
                  <p>選擇發文身分</p>
                  <img src={ArrowPurpleIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="post-window-select-bar-rule">
              <div>i</div>
              <p>發文規則</p>
            </div>
          </div>
          <div className="post-window-content">
            <div className="post-window-content-title">
              <input type="text" placeholder="標題" />
            </div>
            <div className="post-window-content-body">
              <textarea name="" id="" placeholder="內容"></textarea>
            </div>
          </div>
          <div className="post-window-buttons">
            <div className="post-window-buttons-input">
              <img src={SmileIcon} alt="" />
              <img src={PhotoIcon} alt="" />
              <img src={VideoIcon} alt="" />
            </div>
            <div
              className="post-window-buttons-step"
              style={{ cursor: "pointer" }}
            >
              <div onClick={() => navigate("/home")}>取消</div>
              <div onClick={() => navigate("/home")}>下一步</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
