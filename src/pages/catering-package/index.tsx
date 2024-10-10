import CallToActionSection from "@/components/Section/CallToActionSection";
import PageTemplate from "@/components/PageTemplate";
import HeroSection from "@/components/Section/HeroSection";
import ProductListSection from "@/components/Section/ProductListSection";
import Image from "next/image";

import React from "react";
import Header from "@/components/Header";
import { useLanguage } from "@/utils/context/languageContext";
import {
  LanguageDataPackageProps,
  languageDataPackage,
} from "@/utils/language/cateringPackageLanguage";

function CateringPackage() {
  const { language } = useLanguage();
  const localization: LanguageDataPackageProps[string] =
    languageDataPackage[language];
  return (
    <>
      <Header>
        <title>Paket Katering - Katering Sehat</title>
        <meta
          name="description"
          content="Katering rupiah adalah katering murah untuk para pegawai kantoran. Paket katering beragam mulai dari Rp 239.000"
        />
      </Header>
      <PageTemplate>
        <HeroSection>
          <section className="bg-green-700 mb-[80px] lg:mb-[120px]">
            <div className="md:flex md:gap-10 md:flex-row-reverse md:items-center max-w-screen-xl mx-auto">
              <div className="md:min-h-[350px] md:w-1/2">
                <Image
                  priority={true}
                  width={1000}
                  height={500}
                  src="/packageImage-min.webp"
                  className="object-cover md:min-h-[350px]"
                  alt="food image"
                />
              </div>

              <div className="py-10 px-4 md:w-1/2 ">
                <h1 className="text-3xl text-white font-bold mb-4 lg:text-5xl ">
                  {localization.HeroSection.title}
                </h1>
                <p className="text-white lg:text-lg">
                  {localization.HeroSection.subtitle}
                </p>
              </div>
            </div>
          </section>
        </HeroSection>
        <div className="px-4 mb-10">
          <div className="max-w-screen-xl mx-auto text-center mb-10">
            {localization.productListSection.title()}

            <p className="text-gray-700">
              {localization.productListSection.subtitle}
            </p>
          </div>
        </div>
        <ProductListSection showButton={false} limit={999} />
        <CallToActionSection
          callToActionToWhere="https://wa.me/"
          title={localization.callToActionSection.title}
          description={localization.callToActionSection.subtitle}
          callToActionText={localization.callToActionSection.callToActionText}
          image="/cateringPackage-CTA.webp"
        />
      </PageTemplate>
    </>
  );
}

export default CateringPackage;
