import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Untuk mengetahui current pathname yang sedang aktif
import NavLink from "./NavLink";
import NavigationMobile from "./NavigationMobile";

function NavigationBar() {
  const pathname = usePathname(); // will return /about-us --> if the user in the about us page

  const [isOpen, setIsOpen] = useState<boolean>(false); // to control the state of hiding and showing the navigationMobile

  function toggleMenu() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="px-4 sticky top-0 bg-white z-50">
        <div className="container py-3 flex items-center justify-between mx-auto">
          <img src="/dummyLogo.svg" alt="Logo Katering" />
          <nav className="gap-1 hidden sm:flex">
            <NavLink
              device="desktop"
              linkName="Home"
              isActive={pathname === "/"}
              href="/"
            />
            <NavLink
              device="desktop"
              linkName="Package"
              isActive={pathname === "/catering-package"}
              href="/catering-package"
            />
            <NavLink
              device="desktop"
              linkName="About Us"
              isActive={pathname === "/about-us"}
              href="/about-us"
            />
            <NavLink
              device="desktop"
              linkName="Resep Komunitas"
              isActive={pathname === "/resep-komunitas"}
              href="/resep-komunitas"
            />
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
