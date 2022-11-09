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

import Food1 from "../assets/img/post/card/food/鬆餅 1.png";
import Food2 from "../assets/img/post/card/food/雞.png";
import Food3 from "../assets/img/post/card/food/嘎李.png";
import Food4 from "../assets/img/post/card/food/餐酒館.png";
import Food5 from "../assets/img/post/card/food/食堂.png";
import Food6 from "../assets/img/post/card/food/出瓦.png";
import Food7 from "../assets/img/post/card/food/蛋糕.png";
import Food8 from "../assets/img/post/card/food/餃子.png";

import { useEffect, useState } from "react";

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
  previewImg?: string;
}
const fakeHotData: HotDataType[] = [
  { previewImg: Hot1, type: CardType.normal, content: "", title: "123" },
  { previewImg: Hot2, type: CardType.normal, content: "", title: "1234" },
  { previewImg: Hot3, type: CardType.normal, content: "", title: "1234" },
  { previewImg: Hot4, type: CardType.normal, content: "", title: "12345" },
  { previewImg: Hot5, type: CardType.normal, content: "", title: "" },
  { previewImg: Hot6, type: CardType.normal, content: "", title: "" },
  { previewImg: Hot7, type: CardType.normal, content: "", title: "" },
  { previewImg: Hot8, type: CardType.normal, content: "", title: "" },
];

const fakeFoodData: FoodDataType[] = [
  {
    previewImg: Food1,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "123",
  },
  {
    previewImg: Food2,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "123",
  },
  {
    previewImg: Food3,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "123",
  },
  {
    previewImg: Food4,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "123",
  },
  {
    previewImg: Food5,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "123",
  },
  {
    previewImg: Food6,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "123",
  },
  {
    previewImg: Food7,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "123",
  },
  {
    previewImg: Food8,
    type: CardType.rate,
    content: "",
    rate: "4.6",
    title: "123",
  },
];

const Home: React.FC<IProps> = () => {
  const [showPopup, setShowPopup] = useState<PostDataType | null>(null);
  const [showData, setShowData] = useState<PostDataType | null>(null);
  useEffect(() => {
    console.log(showPopup);
  }, [showPopup]);
  return (
    <div className="home">
      <div className="home-left-nav-bar">
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
                clickHandler={() => setShowPopup(data)}
              />
            ))}
          </div>
        </div>
        <div className="home-content-food">
          <div>美食版</div>
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
                className="card-hot"
                clickHandler={() => setShowPopup(data)}
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
                  {showPopup.title}
                </div>
                <div className="home-popup-content-img">
                  <img src={showPopup.previewImg} alt="" />
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
