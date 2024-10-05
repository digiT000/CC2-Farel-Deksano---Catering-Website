import React from "react";
import Link from "next/link";

interface NavLinkProps {
  device: "mobile" | "desktop";
  isActive: boolean;
  linkName: string;
  href: string;
  closeModal?: () => void;
}

function NavLink({
  device,
  isActive,
  linkName,
  href,
  closeModal,
}: NavLinkProps) {
  switch (device) {
    case "mobile":
      return (
        <Link
          className={
            isActive
              ? `px-3 py-1 flex flex-col gap-2 text-green-600 text-2xl font-semibold`
              : "text-2xl font-semibold px-3 py-1 flex flex-col gap-2 text-gray-700 hover:text-green-600 transition-colors"
          }
          href={href}
        >
          {linkName}
          <div
            className={
              isActive
                ? "w-full h-1 rounded-full bg-green-600"
                : "w-full h-1 rounded-full bg-green-600 opacity-0"
            }
          ></div>
        </Link>
      );
    case "desktop":
      return (
        <Link
          onClick={closeModal}
          href={href}
          className={
            isActive
              ? `px-3 py-1 flex flex-col gap-2 text-green-600`
              : "px-3 py-1 flex flex-col gap-2 text-gray-700 hover:text-green-600 transition-colors"
          }
        >
          {linkName}
          <div
            className={
              isActive
                ? "w-full h-1 rounded-full bg-green-600"
                : "w-full h-1 rounded-full bg-green-600 opacity-0"
            }
          ></div>
        </Link>
      );

    default:
      break;
  }
}

export default NavLink;
