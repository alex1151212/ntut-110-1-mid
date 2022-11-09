import ArrowPurpleIcon from "../assets/img/arrowPurple.png";
import VideoIcon from "../assets/img/video.png";
import SmileIcon from "../assets/img/smile.png";
import PhotoIcon from "../assets/img/photo.png";
interface IProps {}

const Post: React.FC<IProps> = () => {
  return (
    <>
      <div className="post">
        <div className="post-window">
          <div className="post-window-bar">
            <ul>
              <li className="active">文章</li>
              <li>圖片</li>
              <li>影片</li>
              <li>連結</li>
              <li>發起投票</li>
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
            <div className="post-window-buttons-step">
              <div>取消</div>
              <div>下一步</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
