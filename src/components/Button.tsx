import Link from "next/link";
import React from "react";

interface ButtonProps {
  isButton: boolean;
  toWhere?: string | null | undefined;
  props?: string;
  buttonType: "primary" | "secondary";
  buttonText: string;
  onClick?: () => void;
}

function Button({
  isButton,
  toWhere,
  props,
  buttonType,
  buttonText,
  onClick,
}: ButtonProps) {
  switch (buttonType) {
    case "primary":
      if (isButton) {
        return (
          <button
            type="submit"
            onClick={onClick}
            className={`p-3 bg-lime-400  font-bold hover:bg-lime-300 transition-colors text-gray-950 rounded-sm w-full h-fit md:w-fit `}
          >
            {buttonText}
          </button>
        );
      } else {
        return (
          <Link
            href={{
              pathname: toWhere,
            }}
            className="p-3 bg-lime-400  font-bold hover:bg-lime-300 transition-colors text-gray-950 rounded-sm w-full h-fit md:w-fit"
          >
            {buttonText}
          </Link>
        );
      }

    case "secondary":
      if (isButton) {
        return (
          <button
            type="submit"
            onClick={onClick}
            className={`p-3 bg-transparent  font-bold border border-white hover:bg-lime-50 hover:text-gray-950 transition-colors text-white rounded-sm w-full h-fit md:w-fit `}
          >
            {buttonText}
          </button>
        );
      } else {
        return (
          <Link
            href={{
              pathname: toWhere,
            }}
            className="p-3 bg-transparent  font-bold border border-white hover:bg-lime-50 hover:text-gray-950 transition-colors text-white rounded-sm w-full h-fit md:w-fit "
          >
            {buttonText}
          </Link>
        );
      }

    default:
      break;
  }
}

export default Button;
