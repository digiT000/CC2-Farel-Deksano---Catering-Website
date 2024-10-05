import React from "react";
import { PackageProps } from "@/utils/interface";

function ProductCard({
  thumbnail,
  title,
  description,
  totalMenu,
  location,
}: PackageProps) {
  return (
    <div className="flex flex-col gap-5">
      <img
        className="h-60 object-cover rounded-lg"
        src={thumbnail}
        alt={`Gambar ${title}`}
      />
      <div>
        <h3 className="text-2xl font-bold text-gray-950 mb-4">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
          <img
            className="fill-orange-600 w-6 h-6"
            src="/Makanan.svg"
            alt="Menu"
          />
          <span className="text-sm text-gray-950 font-medium">
            {totalMenu} Menu
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
          <img
            className="fill-orange-600 w-6 h-6"
            src="/Makanan.svg"
            alt="Menu"
          />
          <span className="text-sm text-gray-950 font-medium">
            {location} Lokasi
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
