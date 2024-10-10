import React from "react";
import Link from "next/link";
import { useLanguage } from "@/utils/context/languageContext";

function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="px-4 border-t border-t-gray-10 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <div className=" md:flex md:items-center md:justify-between">
          <div className="mb-10 text-center flex flex-col gap-4 md:max-w-[600px] ">
            <Link className="text-center md:text-left" href={"/"}>
              <img className="mx-auto md:mx-0" src="/dummyLogo.svg" alt="" />
            </Link>
            <p className="text-gray-600 text-center md:text-left">
              Dibuat karena Kami peduli dengan para pejuang rupiah yang sering
              kali lupa menjaga makan karena sibuknya bekerja
            </p>
          </div>
          <div className="flex gap-5 justify-center">
            <Link className="p-2" href={""}>
              <img src="/instagram.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 text-center mt md:flex-row md:justify-between">
          <div className="mb-10 flex flex-wrap gap-4 justify-center md:mb-0">
            <Link className="text-gray-950" href={"/catering-package"}>
              Package
            </Link>
            <Link className="text-gray-950" href={"/about-us"}>
              About Us
            </Link>
            <Link className="text-gray-950" href={"/testimonial"}>
              Testimonial
            </Link>
          </div>
          <p className="font-medium text-gray-950">
            ❤️ Design & build by frl.design
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
