import React from "react";

interface LocationProps {
  location: string;
  detailLocation: string;
  mapURL: string;
  whatsappURL: string;
}

function LocationChips({
  location,
  detailLocation,
  mapURL,
  whatsappURL,
}: LocationProps) {
  return (
    <div className="p-5 bg-gray-50 rounded-md snap-center md:p-6">
      <h4
        className="text-lg font-bold text-gray-950 mb-2 md:mb-4
      "
      >
        {location}
      </h4>
      <p className="text-sm mb-4 md:text-base">{detailLocation}</p>

      <div className="flex gap-4">
        <a
          target="_blank"
          className="p-2 flex gap-2 rounded-md hover:bg-gray-100 md:p-4 "
          href={mapURL}
        >
          <img className="w-6 h-6" src="/map.svg" alt="Map Icon" />
          <span>lihat Map</span>
        </a>
        <a
          target="_blank"
          className="p-2 flex gap-2 rounded-md hover:bg-gray-100 md:p-4"
          href={whatsappURL}
        >
          <img className="w-6 h-6" src="/whatsapp.svg" alt="Whatsapp Icon" />
          <span>Hubungi Kami</span>
        </a>
      </div>
    </div>
  );
}

export default LocationChips;
