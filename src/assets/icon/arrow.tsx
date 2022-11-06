import React from "react";

interface IProps {
  className?: string;
}

const ArrowIcon: React.FunctionComponent<IProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9999 12C17.9999 12.1989 17.9209 12.3896 17.7802 12.5303C17.6396 12.671 17.4488 12.75 17.2499 12.75H8.56038L11.7809 15.969C11.8506 16.0387 11.9059 16.1215 11.9437 16.2126C11.9814 16.3037 12.0008 16.4014 12.0008 16.5C12.0008 16.5986 11.9814 16.6962 11.9437 16.7873C11.9059 16.8785 11.8506 16.9612 11.7809 17.031C11.7111 17.1007 11.6284 17.156 11.5373 17.1938C11.4461 17.2315 11.3485 17.2509 11.2499 17.2509C11.1513 17.2509 11.0536 17.2315 10.9625 17.1938C10.8714 17.156 10.7886 17.1007 10.7189 17.031L6.21888 12.531C6.14903 12.4613 6.09362 12.3785 6.05581 12.2874C6.018 12.1963 5.99854 12.0986 5.99854 12C5.99854 11.9013 6.018 11.8036 6.05581 11.7125C6.09362 11.6214 6.14903 11.5386 6.21888 11.469L10.7189 6.96897C10.8597 6.82814 11.0507 6.74902 11.2499 6.74902C11.449 6.74902 11.64 6.82814 11.7809 6.96897C11.9217 7.1098 12.0008 7.30081 12.0008 7.49997C12.0008 7.69913 11.9217 7.89014 11.7809 8.03097L8.56038 11.25H17.2499C17.4488 11.25 17.6396 11.329 17.7802 11.4696C17.9209 11.6103 17.9999 11.8011 17.9999 12Z"
      />
    </svg>
  );
};

export default ArrowIcon;
