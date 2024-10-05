import React from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

// interface NavigationMobile {
//   closeMenu?: () => void;
//   isOpen: boolean;
// }

function NavigationMobile() {
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
        <NavLink
          device="mobile"
          linkName="Resep Komunitas"
          isActive={pathname === "/resep-komunitas"}
          href="/resep-komunitas"
        ></NavLink>
      </div>
    </div>
  );
}

export default NavigationMobile;
