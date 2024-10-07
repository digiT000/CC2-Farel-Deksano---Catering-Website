import React, { useEffect } from "react";
import HeroSection from "@/components/Section/HeroSection";
import Button from "@/components/Button";
import SocialProofSection from "@/components/Section/SocialProofSection";
import ProductListSection from "@/components/Section/ProductListSection";
import TestimonialSection from "@/components/Section/TestimonialSection";
import PageTemplate from "@/components/PageTemplate";
import { useLanguage } from "@/context/languageContext";
import { languageData } from "@/language/homepageLanguage";

function Home() {
  const { language } = useLanguage();
  const localization = languageData[language];
  console.log(localization);

  return (
    <PageTemplate>
      <HeroSection>
        <section className="bg-green-700 ">
          <div className="md:flex md:gap-10 md:flex-row-reverse md:items-center max-w-screen-xl mx-auto">
            <div className="md:max-w-full md:max-h-full md:h-auto md:w-[750px] aspect-square">
              <img
                className="object-cover h-full"
                src="/heroImage.webp"
                alt=""
              />
            </div>

            <div className=" px-4 ">
              <h1 className="text-3xl text-white font-bold mb-4 lg:text-5xl ">
                {localization.HeroSection.title()}
              </h1>
              <p className="text-white mb-10 lg:text-lg">
                {localization.HeroSection.subtitle}
              </p>

              <div className="flex flex-col gap-5 lg:flex-row">
                <Button
                  buttonType="primary"
                  onClick={() => console.log("click")}
                  buttonText={localization.HeroSection.buttonPrimary}
                />
                <Button
                  buttonType="secondary"
                  onClick={() => console.log("click")}
                  buttonText={localization.HeroSection.buttonSecondary}
                />
              </div>
            </div>
          </div>
        </section>
      </HeroSection>
      <SocialProofSection />
      <div className="px-4 mb-10">
        <div className="max-w-screen-xl mx-auto text-center mb-10">
          <h2 className="text-2xl text-gray-950 font-bold mb-2 md:text-3xl">
            Pake Menu Makanan Kami
          </h2>
          <p className="text-gray-700 md:text-lg">
            Harga mulai dari Rp 339.000 per bulan
          </p>
        </div>
      </div>
      <ProductListSection />
      <TestimonialSection />
    </PageTemplate>
  );
}

export default Home;
