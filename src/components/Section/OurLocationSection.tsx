import React from "react";
import LocationChips from "../LocationChips";

interface OuLocationProps {
  title: () => JSX.Element;
  subtitle: string;
  mapButtonText: string;
  contactButtonText: string;
}

function OurLocationSection({
  contactButtonText,
  title,
  subtitle,
  mapButtonText,
}: OuLocationProps) {
  return (
    <section className="px-4 mb-20 lg:mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-sm mb-10">
          {title()}

          <p className="text-gray-700">{subtitle}</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <LocationChips
            contactButtonText={contactButtonText}
            mapButtonText={mapButtonText}
            location="Benhil Jakarta Selatan"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            contactButtonText={contactButtonText}
            mapButtonText={mapButtonText}
            location="Jakarta"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            contactButtonText={contactButtonText}
            mapButtonText={mapButtonText}
            location="Jakarta"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            contactButtonText={contactButtonText}
            mapButtonText={mapButtonText}
            location="Jakarta"
            detailLocation="Jl. Bendungan Hilir No.62, RT.5/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            contactButtonText={contactButtonText}
            mapButtonText={mapButtonText}
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
