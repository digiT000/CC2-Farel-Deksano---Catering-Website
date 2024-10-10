import { PackageProps } from "@/utils/interface";
import Image from "next/image";

function ProductCard({
  id,
  packageName,
  imageLink,
  summaryPackage,
  totalMenu,
  onClick,
}: PackageProps) {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer flex flex-col gap-5 p-4 rounded-lg hover:bg-gray-50  hover:-translate-y-2 transition-all"
    >
      <Image
        src={imageLink}
        width={400}
        height={250}
        className="rounded-lg w-full"
        alt={`Gambar ${packageName}`}
      />

      <div className={id}>
        <h3 className="text-2xl font-bold text-gray-950 mb-4">{packageName}</h3>
        <p className="text-gray-600">{summaryPackage}</p>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-md">
          <img
            className="fill-orange-600 w-6 h-6"
            src="/Makanan-green.svg"
            alt="Menu"
          />
          <span className="text-sm text-gray-950 ">{totalMenu} Menu</span>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
