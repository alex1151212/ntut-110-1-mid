import React from "react";

interface IProps {
  className?: string;
}

const ArrowIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5 8L0.669873 0.5L9.33013 0.500001L5 8Z" />
    </svg>
  );
};

export default ArrowIcon;
