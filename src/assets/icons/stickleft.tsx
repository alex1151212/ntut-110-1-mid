import React from "react";

interface IProps {
  className?: string;
}

const StickLeftIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg
      width="35"
      height="632"
      viewBox="0 0 35 632"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="35"
        y="262"
        width="9.00001"
        height="262"
        rx="4.50001"
        transform="rotate(-180 35 262)"
        fill-opacity="0.6"
      />
      <rect
        x="9"
        y="632"
        width="9.00004"
        height="524"
        rx="4.50002"
        transform="rotate(-180 9 632)"
        fill-opacity="0.6"
      />
    </svg>
  );
};

export default StickLeftIcon;
