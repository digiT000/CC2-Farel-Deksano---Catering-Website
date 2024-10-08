import CallToActionSection from "@/components/Section/CallToActionSection";
import OurLocationSection from "@/components/Section/OurLocationSection";
import PageTemplate from "@/components/PageTemplate";
import HeroSection from "@/components/Section/HeroSection";
import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <>
      <PageTemplate>
        <HeroSection>
          <section className="bg-green-700 mb-[80px] lg:mb-[120px] bg-[url('/heroImage-AboutUs.png')] bg-cover bg-no-repeat bg-right px-4">
            <div className="max-w-screen-xl mx-auto text-center text-white py-20">
              <div className="max-w-screen-md mx-auto">
                <h1 className="text-3xl font-bold mb-7 md:text-5xl ">
                  Menjadi katering yang dipercayakan oleh para pekerja
                </h1>
                <p className="">
                  Kami percaya makanan sehat harus bisa diakses oleh siapa saja
                  dengan mudah, terutama diluar sana orang yang berjuang dan
                  berkja
                </p>
              </div>
            </div>
          </section>
        </HeroSection>
        <section className="">
          <div className="md:flex md:gap-10 md:flex-row-reverse md:items-center max-w-screen-xl mx-auto">
            <div className="px-4 mb-10">
              <h1 className="text-3xl text-gray-950 font-bold mb-4 md:text-5xl ">
                Berdiri sejak tahun 2004
              </h1>
              <p className="text-gray-600 md:text-lg">
                Sudah melayani lebih dari{" "}
                <strong className="text-green-600">500.000+</strong> pelanggan
                dan <strong className="text-green-600">1.5 juta+</strong>{" "}
                masakan sudah telah keluar dari dapur Kami.
              </p>
            </div>
            <div className=" grid gap-2 grid-cols-3 min-h-[250px] md:min-h-[400px] ">
              <img
                className="w-full h-full object-cover md:rounded-tl-md md:rounded-tr-md"
                src="/aboutUs-image-1.webp"
                alt=""
              />
              <img
                className="w-full h-full object-cover  md:rounded-tl-md md:rounded-tr-md"
                src="/aboutUs-image-2.webp"
                alt=""
              />
              <img
                className="w-full h-full object-cover  md:rounded-tl-md md:rounded-tr-md"
                src="/aboutUs-image-3.webp"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="bg-green-800 px-4 mb-20 lg:mb-[120px]">
          <div className="py-16 text-white max-w-screen-lg mx-auto md:py-24">
            <h3 className="text-lg font-bold mb-6 md:text-xl">
              Dibagung katering ini karena kami percaya...
            </h3>
            <p className="text-xl leading-[155%] md:text-3xl ">
              Untuk mencapai tujuan sekecil apapun, kita membutuhkan dukungan
              yang optimal. Salah satunya adalah tubuh yang sehat yang didukung
              oleh asupan nutrisi yang cukup. Walaupun ada anggapan bahwa
              makanan sehat itu mahal, kami hadir untuk membuktikan bahwa semua
              orang berhak mendapatkan makanan bergizi dengan harga terjangkau.
            </p>
          </div>
        </section>
        <OurLocationSection />
        <CallToActionSection
          callToActionToWhere="https://api.whatsapp.com/"
          title="Yuk daftar langganan di katering Kami"
          description="Daftar sekarang dan dapatkan promo untuk pendaftaran pertama kali."
          callToActionText="Daftar Langganan"
          image="/aboutUs-CTA.webp"
        />
      </PageTemplate>
    </>
  );
}

export default AboutUs;
