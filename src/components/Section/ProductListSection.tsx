import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { fetchDataProduct } from "@/utils/api";
import { PackageProps, ResponsePackage } from "@/utils/interface";

function ProductListSection() {
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<PackageProps[]>();

  async function fetchProduct() {
    try {
      const response = await fetchDataProduct();

      console.log("fetch resp:", response);

      // mapping response to package properties
      const responseItems = response.items.map((item: ResponsePackage) => ({
        packageName: item.fields.packageName,
        summaryPackage: item.fields.summaryPackage,
        imageLink: item.fields.imageLink,
        listMenu: item.fields.listMenu,
        totalMenu: item.fields.listMenu?.length,
      }));
      setResponse(responseItems);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <section className="px-4 mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {isloading
            ? "loading..."
            : response?.map((packageItem: PackageProps, key: number) => {
                return (
                  <ProductCard
                    key={key}
                    packageName={packageItem.packageName}
                    summaryPackage={packageItem.summaryPackage}
                    totalMenu={packageItem.totalMenu}
                    imageLink={packageItem.imageLink}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default ProductListSection;
