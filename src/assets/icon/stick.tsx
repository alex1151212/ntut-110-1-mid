import React from "react";

interface IProps {
  className?: string;
}

const StickIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg
      width="35"
      height="600"
      viewBox="0 0 35 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="25" width="10" height="171" rx="5" fill-opacity="0.8" />
      <rect width="11" height="600" rx="5.5" fill-opacity="0.8" />
    </svg>
  );
};

export default StickIcon;
