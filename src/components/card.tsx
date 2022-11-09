import { useState, useEffect } from "react";
import StrokeImage from "../assets/img/card/Stroke.png";
import StarImage from "../assets/img/card/Star.png";
import { click } from "@testing-library/user-event/dist/click";
export enum CardType {
  normal = "normal",
  rate = "rate",
}

interface IProps {
  img: string;
  className?: string;
  content?: string;
  title: string;
  type: CardType;
  rate?: string;
  clickHandler?: () => void;
}

const Card: React.FC<IProps> = ({
  img,
  className,
  content,
  title,
  type,
  rate,
  clickHandler,
}) => {
  return (
    <div
      className={`card ${className}`}
      onClick={(e) => clickHandler && clickHandler()}
    >
      <div className="card-container">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        {type === "normal" ? (
          <>
            <div className="card-preview-text">
              <p>{title}</p>
            </div>
            <div className="card-stroke-img">
              <img src={StrokeImage} alt="" />
            </div>
          </>
        ) : (
          <>
            <div className="card-preview-title">{content}</div>
            <div className="card-rate">
              <p>{rate}</p>
              <img src={StarImage} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
