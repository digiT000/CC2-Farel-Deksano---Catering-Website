import React from "react";
import LocationChips from "../LocationChips";

function OurLocationSection() {
  return (
    <section className="px-4 mb-20 lg:mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-sm mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-950 md:text-3xl">
            Tersebar di <span className="text-green-600">5 lokasi</span>
          </h2>
          <p className="text-gray-700">
            Saat ini kami berfokus di wilayah Jakarta, Kami beruhasa untuk
            menjangkau lebih banyak tempat lagi
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <LocationChips
            location="Benhil Jakarta Selatan"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            location="Jakarta"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            location="Jakarta"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            location="Jakarta"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            location="Jakarta"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
        </div>
      </div>
    </section>
  );
}

export default OurLocationSection;
