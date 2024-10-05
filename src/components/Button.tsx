import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  buttonType: "primary" | "secondary";
  buttonText: string;
  onClick: () => void;
}

function Button({ buttonType, buttonText, onClick }: ButtonProps) {
  switch (buttonType) {
    case "primary":
      return (
        <button
          onClick={onClick}
          className={`p-3 bg-lime-400  font-bold hover:bg-lime-300 transition-colors text-gray-950 rounded-sm w-full md:w-fit `}
        >
          {buttonText}
        </button>
      );

    case "secondary":
      return (
        <button
          onClick={onClick}
          className={`p-3 bg-transparent  font-bold border border-white hover:bg-lime-50 hover:text-gray-950 transition-colors text-white rounded-sm w-full md:w-fit `}
        >
          {buttonText}
        </button>
      );

    default:
      break;
  }
}

export default Button;
