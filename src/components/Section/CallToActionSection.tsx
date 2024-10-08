import React from "react";
import Button from "../Button";
import Image from "next/image";

interface CallToActionProps {
  title: string;
  description: string;
  callToActionText: string;
  callToActionToWhere: string;
  image: string;
}

function CallToActionSection({
  callToActionText,
  callToActionToWhere,
  description,
  image,
  title,
}: CallToActionProps) {
  return (
    <section className="px-4 mb-[120px]">
      <div className="max-w-screen-xl mx-auto bg-green-50 rounded-lg overflow-hidden">
        <div className="overflow-hidden md:flex md:gap-20 md:flex-row-reverse md:items-center ">
          <Image
            width={750}
            height={750}
            className="w-full h-[250px] object-cover md:w-1/2 md:h-[450px]"
            src={image}
            alt={`image ${title}`}
          />
          {/* <img
            className="w-full h-[250px] object-cover md:w-1/2 md:h-[450px]"
            src={image}
            alt="Illustration"
          /> */}

          <div className="p-4 md:p-7">
            <h2 className="text-2xl font-bold text-gray-950 mb-5 md:text-3xl">
              {title}
            </h2>
            <p className="text-gray-600 mb-8 md:text-lg">{description}</p>
            <Button
              isButton={false}
              toWhere={callToActionToWhere}
              buttonText={callToActionText}
              buttonType="primary"
              onClick={() => console.log("click")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
