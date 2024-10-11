import React from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/utils/context/languageContext";

function NavigationMobile() {
  const { changeLanguage, language } = useLanguage();
  const pathname = usePathname();
  return (
    <div className="w-screen h-screen fixed top-0 bg-white">
      <div className="py-20 px-5 flex flex-col gap-3">
        <NavLink
          device="mobile"
          linkName="Home"
          isActive={pathname === "/"}
          href="/"
        ></NavLink>
        <NavLink
          device="mobile"
          linkName="Package"
          isActive={pathname === "/catering-package"}
          href="/catering-package"
        ></NavLink>
        <NavLink
          device="mobile"
          linkName="About Us"
          isActive={pathname === "/about-us"}
          href="/about-us"
        ></NavLink>
        <div className="px-3 py-1 flex flex-col gap-2 text-gray-950 text-sm font-medium">
          <div className="w-full h-[1px] bg-gray-200 my-8"></div>
          <select
            className="border border-gray-200  p-3 rounded-md text-xl  "
            name="language"
            id="language"
            value={language}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              changeLanguage(e.target.value)
            }
          >
            <option value="id">Indonesia</option>
            <option value="en">English</option>
          </select>
          <div className="w-full h-1 rounded-full bg-green-600 opacity-0"></div>
        </div>
      </div>
    </div>
  );
}

export default NavigationMobile;
