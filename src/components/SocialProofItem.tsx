import React from "react";
import { SocialProofProps } from "@/utils/interface";
import Image from "next/image";

function SocialProofItem({ image, title, description }: SocialProofProps) {
  return (
    <div className="flex gap-4 md:flex-col md:gap-6">
      <div className="p-2 rounded-md bg-green-600 h-fit w-fit">
        <Image
          className="w-7 h-7"
          height={100}
          width={100}
          src={image}
          alt={title}
        />
        {/* <img className="w-7 h-7" src={image} alt={title} /> */}
      </div>
      <div className="text-white">
        <h3 className="mb-2 text-lg font-bold ">{title}</h3>
        <p className="text-sm ">{description}</p>
      </div>
    </div>
  );
}

export default SocialProofItem;
