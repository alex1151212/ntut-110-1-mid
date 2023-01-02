/* eslint-disable @typescript-eslint/no-unused-vars */
import CarouselImage from "../assets/img/post/活動1.jpg";
import FoodCarouselImage from "../assets/img/post/吃3.jpg";
import Card, { CardType } from "./card";
import ArrowIcon from "../assets/img/post/Arrow 1.png";
import OptionIcon from "../assets/img/post/option.png";
import ProfileImage from "../assets/img/post/Ellipse 26.png";
import CovidImage from "../assets/img/post/隔離.png";

import Hot1 from "../assets/img/post/card/hot/塞車 1.png";
import Hot2 from "../assets/img/post/card/hot/隔離 2.png";
import Hot3 from "../assets/img/post/card/hot/西門 1.png";
import Hot4 from "../assets/img/post/card/hot/遊戲 1.png";
import Hot5 from "../assets/img/post/card/hot/車 1.png";
import Hot6 from "../assets/img/post/card/hot/甜點 1.png";
import Hot7 from "../assets/img/post/card/hot/image 3.png";
import Hot8 from "../assets/img/post/card/hot/檢 1.png";

import HotPost1 from "../assets/img/post/塞車.jpg";
import HotPost2 from "../assets/img/post/隔離.png";
import HotPost3 from "../assets/img/post/西門.jpg";
import HotPost4 from "../assets/img/post/遊戲.jpg";
import HotPost5 from "../assets/img/post/車.jpg";
import HotPost6 from "../assets/img/post/甜點.jpg";
// import HotPost7 from "../assets/img/post/image 3.jpg";
import HotPost8 from "../assets/img/post/檢.jpg";

import Food1 from "../assets/img/post/card/food/鬆餅 1.png";
import Food2 from "../assets/img/post/card/food/雞.png";
import Food3 from "../assets/img/post/card/food/嘎李.png";
import Food4 from "../assets/img/post/card/food/餐酒館.png";
import Food5 from "../assets/img/post/card/food/食堂.png";
import Food6 from "../assets/img/post/card/food/出瓦.png";
import Food7 from "../assets/img/post/card/food/蛋糕.png";
import Food8 from "../assets/img/post/card/food/餃子.png";

import FoodPost1 from "../assets/img/post/鬆餅.jpg";
import FoodPost2 from "../assets/img/post/雞.jpg";
import FoodPost3 from "../assets/img/post/嘎李.jpg";
import FoodPost4 from "../assets/img/post/餐酒館.jpg";
import FoodPost5 from "../assets/img/post/食堂.jpg";
import FoodPost6 from "../assets/img/post/出瓦.jpg";
import FoodPost7 from "../assets/img/post/蛋糕.jpg";
import FoodPost8 from "../assets/img/post/餃子.jpg";

import { useEffect, useState } from "react";
import Header from "./header";

interface IProps {}
interface HotDataType {
  previewImg: string;
  img?: string;
  type: CardType;
  content: string;
  title: string;
}
interface FoodDataType {
  previewImg: string;
  img?: string;
  type: CardType;
  content: string;
  rate: string;
  title: string;
}
interface PostDataType {
  title: string;
  img?: string;
}

const fakeHotData: HotDataType[] = [
  {
    previewImg: Hot1,
    img: HotPost1,
    type: CardType.normal,
    content:
      "國道1號汐止交流道近日接連傳出走山事故，高公局封閉五堵入口跟國1南下五堵至汐止主線，市府也於昨日晚間緊急提醒，希望民眾多利用替代道路或大眾交通工具，但根據即時影像監視器，汐止多路段一早便開始出現大量車潮，多個交通路口車滿為患，當地民眾也感嘆是「交通最黑暗的一天」。",
    title: "連續山崩汐止一早湧大量車潮",
  },
  {
    previewImg: Hot2,
    img: HotPost2,
    type: CardType.normal,
    content: "",
    title: "確診隔離11/14起縮至5天",
  },
  {
    previewImg: Hot3,
    img: HotPost3,
    type: CardType.normal,
    content: "",
    title: "西門町當街捅殺！和女友吵架竟砍路人",
  },
  {
    previewImg: Hot4,
    img: HotPost4,
    type: CardType.normal,
    content: "",
    title: "2022/10月 Switch 新遊戲推薦分享",
  },
  {
    previewImg: Hot5,
    img: HotPost5,
    type: CardType.normal,
    content: "",
    title: "八斗子漁港休旅車落海 男子被救起無生命跡象",
  },
  {
    previewImg: Hot6,
    img: HotPost6,
    type: CardType.normal,
    content: "",
    title: "10+間特色甜點店用質感風格打造午茶新風景",
  },
  {
    previewImg: Hot7,
    img: HotPost4,
    type: CardType.normal,
    content: "",
    title: "2022秋冬新番動漫推薦！",
  },
  {
    previewImg: Hot8,
    img: HotPost8,
    type: CardType.normal,
    content: "",
    title: "淡水版柬埔寨 26人求職慘遭囚禁餵毒打",
  },
];

const fakeFoodData: FoodDataType[] = [
  {
    previewImg: Food1,
    img: FoodPost1,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "九州鬆餅瓦芙",
  },
  {
    previewImg: Food2,
    img: FoodPost2,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "雞的專家",
  },
  {
    previewImg: Food3,
    img: FoodPost3,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "笑貓咖哩 咖哩飯專賣店",
  },
  {
    previewImg: Food4,
    img: FoodPost4,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "Last Order 餐酒館",
  },
  {
    previewImg: Food5,
    img: FoodPost5,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "春寅食堂",
  },
  {
    previewImg: Food6,
    img: FoodPost6,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "初瓦 台北捷運西門店",
  },
  {
    previewImg: Food7,
    img: FoodPost7,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "Lady M 旗艦店",
  },
  {
    previewImg: Food8,
    img: FoodPost8,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "有煎餃子館 北市寧波館",
  },
];

const Home: React.FC<IProps> = () => {
  const [showPopup, setShowPopup] = useState<PostDataType | null>(null);
  const [isLeftNavBarOpen, setIsLeftNavBarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleRWD = () => {
    if (window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  useEffect(() => {
    if (isMobile) setIsLeftNavBarOpen(false);
    else setIsLeftNavBarOpen(true);
  }, [isMobile]);

  return (
    <div className="home">
      <Header
        setLeftNavBar={setIsLeftNavBarOpen}
        leftNavBar={isLeftNavBarOpen}
      />
      <div
        className="home-left-nav-bar"
        style={{
          display: (isMobile && (isLeftNavBarOpen ? "block" : "none")) || "",
        }}
      >
        <ul>
          <li>
            <div></div>所有看板
          </li>
          <li>
            <div></div>及時熱門看板
          </li>
          <li>
            <div></div>收藏看板
          </li>
        </ul>
        <ul>
          <li>
            <div></div>遊戲
          </li>
          <li>
            <div></div>吃遍美食
          </li>
          <li>
            <div></div>時尚穿搭
          </li>
          <li>
            <div></div>美妝
          </li>
          <li>
            <div></div>居家生活
          </li>
          <li>
            <div></div>英文檢定
          </li>
          <li>
            <div></div>日常生活
          </li>
          <li>
            <div></div>研究所
          </li>
          <li>
            <div></div>水族
          </li>
          <li>
            <div></div>團購
          </li>
          <li>
            <div></div>追星
          </li>
          <li>
            <div></div>動漫卡通
          </li>
          <li>
            <div></div>影音娛樂
          </li>
        </ul>
      </div>
      <div className="home-content">
        <div className="home-content-carousel" style={{ marginBottom: "44px" }}>
          <img src={CarouselImage} alt="" />
        </div>
        <div className="home-content-hot">
          <div>熱門推薦</div>
          <div
            className="home-content-container"
            style={{ marginBottom: "70px" }}
          >
            {fakeHotData.map((data) => (
              <Card
                img={data.previewImg}
                type={data.type}
                title={data.title}
                className="card-hot"
                clickHandler={() => {
                  window.scrollTo(0, 54);
                  setShowPopup(data);
                }}
              />
            ))}
          </div>
        </div>
        <div className="home-content-food">
          <div>美食版</div>
          <div></div>
          <div
            className="home-content-food-carousel"
            style={{ marginBottom: "44px" }}
          >
            <img src={FoodCarouselImage} alt="" />
          </div>
          <div className="home-content-container">
            {fakeFoodData.map((data) => (
              <Card
                img={data.previewImg}
                type={data.type}
                rate={data.rate}
                title={data.title}
                className="card-food"
                clickHandler={() => {
                  window.scrollTo(0, 54);
                  setShowPopup(data);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {showPopup !== null ? (
        <div className="home-popup-mask">
          <div className="home-popup">
            <div className="home-popup-window">
              <div
                className="home-popup-arrow-icon"
                onClick={(e) => setShowPopup(null)}
              >
                <img src={ArrowIcon} alt="" />
              </div>
              <div className="home-popup-header">
                <div className="home-popup-profile">
                  <div className="home-popup-profile-img">
                    <img src={ProfileImage} alt="" />
                  </div>
                  <div className="home-popup-profile-text">
                    <p>台北市吳先生</p>
                    <p>2022/11/05 下午09:51</p>
                  </div>
                </div>
                <div className="home-popup-option-icon">
                  <img src={OptionIcon} alt="" />
                </div>
              </div>
              <div className="home-popup-content">
                <div className="home-popup-content-title">
                  {showPopup.title}!
                </div>
                <div className="home-popup-content-img">
                  <img src={showPopup.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
