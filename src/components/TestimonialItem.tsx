import React from "react";

interface TestimonialProps {
  description: string;
  name: string;
  detailProfile: string;
}

function TestimonialItem({
  description,
  name,
  detailProfile,
}: TestimonialProps) {
  return (
    <div className="p-6 bg-orange-50 rounded-md">
      <p className="text-gray-950 mb-10">{description}</p>
      <div>
        <h3 className="text-gray-950 font-bold mb-1">{name}</h3>
        <p className="text-gray-700 text-sm">{detailProfile}</p>
      </div>
    </div>
  );
}

export default TestimonialItem;
