import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import TestimonialItem from "../TestimonialItem";

function TestimonialSection() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <section className="px-4 mb-20 md:mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className=" lg:flex lg:items-center lg:justify-between md:mb-10">
          <h2 className="text-2xl font-bold text-gray-950 mb-10 md:text-3xl md:mb-0">
            Pejuang Rupiah yang puas dengan Katering Kami
          </h2>
          <div className="hidden items-center justify-center gap-5 md:flex ">
            <a
              className="p-3 cursor-pointer rounded-full hover:bg-gray-50 transition-all"
              onClick={handlePrevClick}
            >
              <img src="/arrow-left-line.svg" alt="icon-arrow" />
            </a>
            <a
              className="p-3 cursor-pointer rounded-full hover:bg-gray-50 transition-all"
              onClick={handleNextClick}
            >
              <img src="/arrow-right-line.svg" alt="icon-arrow" />
            </a>
          </div>
        </div>
        <div className="mb-5">
          <Swiper
            onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
            slidesPerView={1}
            spaceBetween={40}
            navigation={true}
            modules={[Navigation]}
            className="testimonialSwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <TestimonialItem
                name="Farel Darari Deksano"
                description="Super duper puas ama kateringRupiah, mesen paket yang tinggi protein udah jalan 3 bulan. Gak pernah gagal dari rasa dan porsinya."
                detailProfile="Perjuang rupiah daerah Jakarta Selatan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem
                name="Farel Darari Deksano"
                description="Super duper puas ama kateringRupiah, mesen paket yang tinggi protein udah jalan 3 bulan. Gak pernah gagal dari rasa dan porsinya."
                detailProfile="Perjuang rupiah daerah Jakarta Selatan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem
                name="Adityas"
                description="Super duper puas ama kateringRupiah, mesen paket yang tinggi protein udah jalan 3 bulan. Gak pernah gagal dari rasa dan porsinya."
                detailProfile="Perjuang rupiah daerah Jakarta Selatan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem
                name="Adityas"
                description="Super duper puas ama kateringRupiah, mesen paket yang tinggi protein udah jalan 3 bulan. Gak pernah gagal dari rasa dan porsinya."
                detailProfile="Perjuang rupiah daerah Jakarta Selatan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem
                name="Adityas"
                description="Super duper puas ama kateringRupiah, mesen paket yang tinggi protein udah jalan 3 bulan. Gak pernah gagal dari rasa dan porsinya."
                detailProfile="Perjuang rupiah daerah Jakarta Selatan"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex items-center justify-center gap-5 lg:hidden">
          <a className="p-3" onClick={handlePrevClick}>
            <img src="/arrow-left-line.svg" alt="icon-arrow" />
          </a>
          <a className="p-3" onClick={handleNextClick}>
            <img src="/arrow-right-line.svg" alt="icon-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
