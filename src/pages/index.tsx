import React from "react";
import HeroSection from "@/components/Section/HeroSection";
import Button from "@/components/Button";
import SocialProofSection from "@/components/Section/SocialProofSection";
import ProductListSection from "@/components/Section/ProductListSection";
import TestimonialSection from "@/components/TestimonialSection";
import PageTemplate from "@/components/PageTemplate";

function Home() {
  return (
    <PageTemplate>
      <HeroSection>
        <section className="bg-green-600 ">
          <div className="md:flex md:gap-10 md:flex-row-reverse md:items-center max-w-screen-xl mx-auto">
            <div className="md:min-h-[600px]">
              <img
                className="object-cover md:min-h-[600px] "
                src="/heroImage.webp"
                alt=""
              />
            </div>

            <div className="py-10 px-4 ">
              <h1 className="text-3xl text-white font-bold mb-4 lg:text-5xl ">
                <span className="text-lime-400">4 sehat 5 sempurna</span> untuk
                pejuang rupiah
              </h1>
              <p className="text-white mb-10 lg:text-lg">
                Ratusan menu makanan yang bebas Kamu pilih untuk menemani makan
                Kamu setiap harinya
              </p>

              <div className="flex flex-col gap-5 lg:flex-row">
                <Button
                  buttonType="primary"
                  onClick={() => console.log("click")}
                  buttonText="Langganan Katering"
                />
                <Button
                  buttonType="secondary"
                  onClick={() => console.log("click")}
                  buttonText="Lihat Paket Menu"
                />
              </div>
            </div>
          </div>
        </section>
      </HeroSection>
      <SocialProofSection />
      <div className="px-4 mb-10">
        <div className="max-w-screen-xl mx-auto text-center mb-10">
          <h2 className="text-2xl text-gray-950 font-bold mb-2">
            Pake Menu Makanan Kami
          </h2>
          <p className="text-gray-700">Harga mulai dari Rp 339.000 per bulan</p>
        </div>
      </div>
      <ProductListSection />
      <TestimonialSection />
    </PageTemplate>
  );
}

export default Home;
