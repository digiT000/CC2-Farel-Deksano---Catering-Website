import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { fetchDataProduct } from "@/utils/api";
import { PackageProps, ResponsePackage } from "@/utils/interface";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../Button";
interface ProductListProps {
  limit: number;
  showButton: boolean;
}

function ProductListSection({ limit, showButton }: ProductListProps) {
  const router = useRouter();

  const [isloading, setIsLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<PackageProps[]>();

  async function fetchProduct() {
    try {
      const response = await fetchDataProduct();

      // mapping response to package properties
      const responseItems: PackageProps[] = response.items.map(
        (item: ResponsePackage) => {
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

  return (
    <section className="px-4 mb-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {isloading ? (
            <div className="w-sreen h-60 flex justify-center items-center p-10 col-span-3">
              <ClipLoader color="#15803d" speedMultiplier={1} size={100} />
            </div>
          ) : (
            response?.map((packageItem: PackageProps, key: number) => {
              console.log(key);
              console.log("item:", packageItem);
              if (key <= limit) {
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
                      redirect(packageItem.id);
                    }}
                  />
                );
              } else {
              }
            })
          )}
        </div>
        {showButton && (
          <div className="flex items-center justify-center">
            <Button
              isButton={false}
              buttonType="primary"
              toWhere="/catering-package"
              buttonText="See More"
            ></Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductListSection;
