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
    <div className="p-5 snap-center md:p-6 border-l-4 border-l-green-600">
      <h4
        className="text-lg font-bold text-gray-950 mb-2 md:mb-4
      "
      >
        {location}
      </h4>
      <p className="text-sm mb-4 md:text-base text-gray-700">
        {detailLocation}
      </p>

      <div className="flex gap-6">
        <a
          target="_blank"
          className="p-2 flex gap-2 rounded-md items-center bg-lime-100 hover:bg-lime-200 md:p-3 "
          href={mapURL}
        >
          <img className="w-5 h-5" src="/map.svg" alt="Map Icon" />
          <span className="font-medium text-gray-950 text-sm">Lihat Map</span>
        </a>
        <a
          target="_blank"
          className="p-2 flex gap-2 bg-lime-100 rounded-md hover:bg-lime-200 md:p-3 items-center"
          href={whatsappURL}
        >
          <img className="w-5 h-5" src="/whatsapp.svg" alt="Whatsapp Icon" />
          <span className="font-medium text-gray-950 text-sm">
            Hubungi Kami
          </span>
        </a>
      </div>
    </div>
  );
}

export default LocationChips;
