import React from "react";

interface IProps {
  className?: string;
}

const StickRightIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg
      width="35"
      height="398"
      viewBox="0 0 35 398"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect y="233" width="9" height="165" rx="4.5" fill-opacity="0.6" />
      <rect x="26" width="9" height="330" rx="4.5" fill-opacity="0.6" />
    </svg>
  );
};

export default StickRightIcon;
