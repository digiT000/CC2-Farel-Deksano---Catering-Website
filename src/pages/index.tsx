import React from "react";
import HeroSection from "@/components/Section/HeroSection";
import Button from "@/components/Button";
import SocialProofSection from "@/components/Section/SocialProofSection";
import ProductListSection from "@/components/Section/ProductListSection";
import TestimonialSection from "@/components/Section/TestimonialSection";
import PageTemplate from "@/components/PageTemplate";
import { useLanguage } from "@/utils/context/languageContext";
import { languageData } from "@/utils/language/homepageLanguage";
import { LanguageDataHomepage } from "@/utils/language/homepageLanguage";
import Header from "@/components/Header";
import Image from "next/image";

function Home() {
  const { language } = useLanguage();
  const localization: LanguageDataHomepage[string] = languageData[language];

  return (
    <>
      <Header>
        <title>Home</title>
      </Header>
      <PageTemplate>
        <HeroSection>
          <section className="bg-green-700 ">
            <div className="md:flex md:gap-10 md:flex-row-reverse md:items-center max-w-screen-xl mx-auto">
              <div className="md:max-w-full md:max-h-full md:h-auto md:w-[750px] aspect-square">
                <Image
                  priority={true}
                  width={1200}
                  height={600}
                  className="object-cover h-full w-full"
                  src="/heroImage.webp"
                  alt="hero-image"
                />
              </div>

              <div className=" px-4 py-6 md:py-1">
                <h1 className="text-3xl text-white font-bold mb-4 lg:text-5xl ">
                  {localization.HeroSection.title()}
                </h1>
                <p className="text-white mb-10 lg:text-lg">
                  {localization.HeroSection.subtitle}
                </p>

                <div className="flex flex-col gap-5 lg:flex-row">
                  <Button
                    isButton={false}
                    toWhere="https://wa.me/"
                    buttonType="primary"
                    onClick={() => console.log("click")}
                    buttonText={localization.HeroSection.buttonPrimary}
                  />
                  <Button
                    isButton={false}
                    toWhere="https://wa.me/"
                    buttonType="secondary"
                    onClick={() => console.log("click")}
                    buttonText={localization.HeroSection.buttonSecondary}
                  />
                </div>
              </div>
            </div>
          </section>
        </HeroSection>
        <SocialProofSection socialProofList={localization.socialProofSection} />
        <div className="px-4 mb-10">
          <div className="max-w-screen-xl mx-auto text-center mb-10">
            <h2 className="text-2xl text-gray-950 font-bold mb-2 md:text-3xl">
              {localization.productListSection.title}
            </h2>
            <p className="text-gray-700 md:text-lg">
              {localization.productListSection.description}
            </p>
          </div>
        </div>
        <ProductListSection limit={2} />
        <TestimonialSection
          header={localization.testimonialSection.title}
          testimonailList={localization.testimonialSection.listTestimonial}
        />
      </PageTemplate>
    </>
  );
}

export default Home;
