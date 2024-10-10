import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Untuk mengetahui current pathname yang sedang aktif
import NavLink from "./NavLink";
import NavigationMobile from "./NavigationMobile";
import { useLanguage } from "@/utils/context/languageContext";
import {
  navigationLanguage,
  Navigationprops,
} from "@/utils/language/navigationLanguage";

function NavigationBar() {
  // To control the language
  const { language, changeLanguage } = useLanguage();
  const localization: Navigationprops[string] = navigationLanguage[language];
  const pathname = usePathname(); // will return /about-us --> if the user in the about us page

  const [isOpen, setIsOpen] = useState<boolean>(false); // to control the state of hiding and showing the navigationMobile

  function toggleMenu() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }
  console.log("current Lang:", language);
  return (
    <>
      <header className="px-4 sticky top-0 bg-white z-50">
        <div className="container py-3 flex items-center justify-between mx-auto">
          <img src="/dummyLogo.svg" alt="Logo Katering" />
          <nav className="gap-1 hidden sm:flex sm:items-center">
            <NavLink
              device="desktop"
              linkName={localization.menu_home}
              isActive={pathname === "/"}
              href="/"
            />
            <NavLink
              device="desktop"
              linkName={localization.menu_cateringPackage}
              isActive={pathname === "/catering-package"}
              href="/catering-package"
            />
            <NavLink
              device="desktop"
              linkName={localization.menu_aboutUs}
              isActive={pathname === "/about-us"}
              href="/about-us"
            />

            <div className="px-3 py-1 flex flex-col gap-2 text-gray-950 text-sm font-medium">
              <select
                className="border border-gray-200 px-2 py-1 rounded-md "
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
          </nav>
          <nav className="sm:hidden">
            <button onClick={toggleMenu} className="p-1 ">
              <img src="/menu.svg" alt="menu" />
            </button>
          </nav>
        </div>
      </header>
      {isOpen ? <NavigationMobile /> : ""}
    </>
  );
}

export default NavigationBar;
