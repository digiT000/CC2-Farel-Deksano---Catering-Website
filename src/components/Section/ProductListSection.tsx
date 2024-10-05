import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { fetchDataProduct } from "@/utils/api";
import { PackageProps } from "@/utils/interface";

function ProductListSection() {
  //const []
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<any[]>();

  async function fetchProduct() {
    try {
      const response = await fetchDataProduct("master");

      setResponse(response.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // function setThumbnail(){
  //   const findId = response?.includes?.Asset[0].fields.
  // }

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log("Response", response);
  return (
    <section className="px-4 mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {isloading
            ? "loading..."
            : response?.map((packageItem: any) => {
                console.log(packageItem);
                return (
                  <ProductCard
                    title={packageItem.fields.packageName}
                    description={packageItem.fields.summaryPackage}
                    thumbnail={packageItem.fields.imageLink}
                    totalMenu={packageItem.fields.listMenu.length}
                    location={packageItem.fields.listLocation.length}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default ProductListSection;
