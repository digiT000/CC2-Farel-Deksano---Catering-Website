import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { fetchDataProduct } from "@/utils/api";
import { PackageProps, ResponsePackage } from "@/utils/interface";
import { useRouter } from "next/navigation";

function ProductListSection() {
  const router = useRouter();

  const [isloading, setIsLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<PackageProps[]>();

  async function fetchProduct() {
    try {
      const response = await fetchDataProduct();

      console.log("fetch resp:", response);

      // mapping response to package properties
      const responseItems: PackageProps[] = response.items.map(
        (item: ResponsePackage) => {
          console.log("item ID", item);
          return {
            id: item.sys.id,
            packageName: item.fields.packageName,
            summaryPackage: item.fields.summaryPackage,
            imageLink: item.fields.imageLink,
            listMenu: item.fields.listMenu,
            totalMenu: item.fields.listMenu?.length,
          };
        }
      );
      console.log("result", responseItems);
      setResponse(responseItems);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  function redirect(packageId: string) {
    router.push(`/catering-package/${packageId}`);
  }

  console.log("Inner Response:", response);
  return (
    <section className="px-4 mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {isloading
            ? "loading..."
            : response?.map((packageItem: PackageProps, key: number) => {
                console.log("item:", packageItem);
                return (
                  <ProductCard
                    mainImage="none"
                    key={key}
                    id={packageItem.id}
                    packageName={packageItem.packageName}
                    summaryPackage={packageItem.summaryPackage}
                    imageLink={packageItem.imageLink}
                    totalMenu={packageItem.totalMenu}
                    onClick={() => {
                      console.log(redirect(packageItem.id));
                    }}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default ProductListSection;
