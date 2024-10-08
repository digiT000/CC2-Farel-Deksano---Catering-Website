import PageTemplate from "@/components/PageTemplate";
import React from "react";

function ProductDetailLoading() {
  return (
    <PageTemplate>
      <section className="px-4 py-8">
        <div className="max-w-screen-lg mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-5 md:h-fit md:sticky md:top-20">
              <div className="w-full h-[350px] bg-gray-100 animate-pulse rounded-lg"></div>
              <div className="w-full h-10 bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="w-full h-3 bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="w-full h-3 bg-gray-300 animate-pulse rounded-lg"></div>

              <div className="bg-gray-100 p-4 rounded-lg md:flex md:justify-between md:items-center animate-pulse">
                <div className="w-full h-32 rounded-lg bg-gray-300 animate-pulse"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-md">
              <div className="max-w-32 h-3 bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="max-w-full h-[100px] bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="max-w-full h-[100px] bg-gray-300 animate-pulse rounded-lg"></div>

              <div className="max-w-full h-[100px] bg-gray-300 animate-pulse rounded-lg"></div>

              <div className="max-w-full h-[100px] bg-gray-300 animate-pulse rounded-lg"></div>

              <div className="max-w-full h-[100px] bg-gray-300 animate-pulse rounded-lg"></div>

              <div className="max-w-full h-[100px] bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="max-w-full h-[100px] bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

export default ProductDetailLoading;
