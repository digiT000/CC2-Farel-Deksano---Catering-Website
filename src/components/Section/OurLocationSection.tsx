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
            location="Kota Kasablanka"
            detailLocation="Jl. Raya Casablanca No.Kav 88, Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            contactButtonText={contactButtonText}
            mapButtonText={mapButtonText}
            location="BINUS University, Kampus BINUS Anggrek"
            detailLocation="Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            contactButtonText={contactButtonText}
            mapButtonText={mapButtonText}
            location="Sinarmas"
            detailLocation="Chase Plaza, Jl. Jenderal Sudirman No.21 Lt.7 Kav, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920  "
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
          <LocationChips
            contactButtonText={contactButtonText}
            mapButtonText={mapButtonText}
            location="Plasa Telkom Indonesia"
            detailLocation="No.Kav. 52, Gedung Telkom Landmark Tower II, Jl. Gatot Subroto lantai.39, Kec. Mampang Prpt., Kota Jakarta Selatan, 12710"
            mapURL="https://google.com"
            whatsappURL="https://google.com"
          />
        </div>
      </div>
    </section>
  );
}

export default OurLocationSection;
