import CallToActionSection from "@/components/Section/CallToActionSection";
import OurLocationSection from "@/components/Section/OurLocationSection";
import PageTemplate from "@/components/PageTemplate";
import HeroSection from "@/components/Section/HeroSection";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/utils/context/languageContext";
import {
  LanguageDataAboutUsProps,
  languageDataAboutUs,
} from "@/utils/language/aboutUsLanguage";

import Header from "@/components/Header";

function AboutUs() {
  const { language } = useLanguage();
  const localization: LanguageDataAboutUsProps[string] =
    languageDataAboutUs[language];

  return (
    <>
      <Header>
        <title>tentang Kami - Katering Sehat</title>
        <meta
          name="description"
          content="Katering rupiah adalah katering murah untuk para pegawai kantoran. Paket katering beragam mulai dari Rp 239.000"
        />
      </Header>
      <PageTemplate>
        <HeroSection>
          <section className="bg-green-700 mb-[80px] lg:mb-[120px] bg-[url('/heroImage-AboutUs.png')] bg-cover bg-no-repeat bg-right px-4">
            <div className="max-w-screen-xl mx-auto text-center text-white py-20">
              <div className="max-w-screen-md mx-auto">
                <h1 className="text-3xl font-bold mb-7 md:text-5xl ">
                  {localization.HeroSection.title}
                </h1>
                <p className="">{localization.HeroSection.subtitle}</p>
              </div>
            </div>
          </section>
        </HeroSection>
        <section className="">
          <div className="md:flex md:gap-10 md:flex-row-reverse md:items-center max-w-screen-xl mx-auto">
            <div className="px-4 mb-10">
              <h1 className="text-3xl text-gray-950 font-bold mb-4 md:text-5xl ">
                {localization.sinceSection.title}
              </h1>
              {localization.sinceSection.subtitle()}
            </div>
            <div className=" grid gap-2 grid-cols-3 min-h-[250px] md:min-h-[400px] ">
              <Image
                width={500}
                height={800}
                className="w-full h-full object-cover md:rounded-tl-md md:rounded-tr-md"
                src="/aboutUs-image-1.webp"
                alt="image-food-1"
              />
              <Image
                width={500}
                height={800}
                className="w-full h-full object-cover md:rounded-tl-md md:rounded-tr-md"
                src="/aboutUs-image-2.webp"
                alt="image-food-1"
              />
              <Image
                width={500}
                height={800}
                className="w-full h-full object-cover md:rounded-tl-md md:rounded-tr-md"
                src="/aboutUs-image-3.webp"
                alt="image-food-1"
              />
            </div>
          </div>
        </section>
        <section className="bg-green-800 px-4 mb-20 lg:mb-[120px]">
          <div className="py-16 text-white max-w-screen-lg mx-auto md:py-24">
            <h3 className="text-lg font-bold mb-6 md:text-xl">
              {localization.visionMisionSection.title}
            </h3>
            <p className="text-xl leading-[155%] md:text-3xl ">
              {localization.visionMisionSection.subtitle}
            </p>
          </div>
        </section>
        <OurLocationSection
          title={localization.locationSection.title}
          subtitle={localization.locationSection.subtitle}
          mapButtonText={localization.locationSection.mapButtonText}
          contactButtonText={localization.locationSection.contactButtonText}
        />
        <CallToActionSection
          callToActionToWhere="https://api.whatsapp.com/"
          title={localization.callToActionSection.title}
          description={localization.callToActionSection.subtitle}
          callToActionText={localization.callToActionSection.callToActionText}
          image="/aboutUs-CTA.webp"
        />
      </PageTemplate>
    </>
  );
}

export default AboutUs;
