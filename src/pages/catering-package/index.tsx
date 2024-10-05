import CallToActionSection from "@/components/Section/CallToActionSection";
import PageTemplate from "@/components/PageTemplate";
import HeroSection from "@/components/Section/HeroSection";
import ProductListSection from "@/components/Section/ProductListSection";
HeroSection;

import React from "react";

function CateringPackage() {
  return (
    <PageTemplate>
      <HeroSection>
        <section className="bg-green-600 mb-[80px] lg:mb-[120px]">
          <div className="md:flex md:gap-10 md:flex-row-reverse md:items-center max-w-screen-xl mx-auto">
            <div className="md:min-h-[350px]">
              <img
                className="object-cover md:min-h-[350px] "
                src="/packageImage-min.webp"
                alt=""
              />
            </div>

            <div className="py-10 px-4 ">
              <h1 className="text-3xl text-white font-bold mb-4 lg:text-5xl ">
                Pilih dan langganan paket katering
              </h1>
              <p className="text-white lg:text-lg">
                Ratusan menu makanan yang bebas Kamu pilih untuk menemani makan
                Kamu setiap harinya
              </p>
            </div>
          </div>
        </section>
      </HeroSection>
      <div className="px-4 mb-10">
        <div className="max-w-screen-xl mx-auto text-center mb-10">
          <h2 className="text-2xl text-gray-950 font-bold mb-2">
            Eksplor Paket makanan Kami, harga mulai dari{" "}
            <span className="text-green-600">Rp239.000</span>
          </h2>
          <p className="text-gray-700">
            Cari yang paling sesuai dan kebuthan Kamu
          </p>
        </div>
      </div>
      <ProductListSection />
      <CallToActionSection
        title="Bingung harus pilih pake yang mana?"
        description="Langsung aja hubungi Kami untuk konsultasi, supaya asupan Kamu sepenuhnya terpenuhi"
        callToActionText="Konsultasi Sekarang"
        image="/cateringPackage-CTA.jpg"
      />
    </PageTemplate>
  );
}

export default CateringPackage;
