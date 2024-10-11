import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchSingleProduct } from "@/utils/api";
import { PackageProps } from "@/utils/interface";
import PageTemplate from "@/components/PageTemplate";
import ListMenu from "@/components/ListMenu";
import Image from "next/image";
import Button from "@/components/Button";
import ProductDetailLoading from "./loading";
import Header from "@/components/Header";

export default function PackageDetail() {
  const router = useRouter();
  const { packageId } = router.query;

  const [isLoading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<PackageProps>({
    id: "",
    imageLink: "",
    packageName: "",
    summaryPackage: "",
    listMenu: [],
    totalMenu: 0,
    mainImage: "",
  });

  async function fetchProduct(packageId: string | string[] | undefined) {
    try {
      const dataProduct = await fetchSingleProduct(packageId);
      setProduct({
        id: dataProduct.sys.id,
        imageLink: dataProduct.fields.imageLink,
        packageName: dataProduct.fields.packageName,
        summaryPackage: dataProduct.fields.summaryPackage,
        listMenu: dataProduct.fields.listMenu,
        totalMenu: dataProduct.fields.listMenu.length,
        mainImage: dataProduct.fields.mainImage,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct(packageId);
  }, [router.query]);

  const waBaseUrl = `https://wa.me/6287741604343?text=`;
  const seperateProductName = product.packageName.replaceAll(" ", "%20");
  const urlText = waBaseUrl + seperateProductName + "%20";

  return isLoading ? (
    <ProductDetailLoading></ProductDetailLoading>
  ) : (
    <>
      <Header>
        <title>{`${product.packageName} - Katering Sehat`}</title>
        <meta
          name="description"
          content="Katering rupiah adalah katering murah untuk para pegawai kantoran. Paket katering beragam mulai dari Rp 239.000"
        />
      </Header>
      <PageTemplate>
        <section className="px-4 py-8">
          <div className="max-w-screen-lg mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-5 md:h-fit md:sticky md:top-20">
                <Image
                  src={product.mainImage}
                  width={600}
                  height={600}
                  alt="tes"
                  className="w-full object-cover rounded-md"
                />
                <h1 className="text-2xl text-gray-950 font-bold">
                  {product?.packageName}
                </h1>
                <p className=" text-gray-700 md:text-lg">
                  {product?.summaryPackage}
                </p>
                <div className="bg-green-50 p-4 rounded-lg md:flex md:justify-between md:items-center">
                  <div>
                    <p className="text-sm text-gray-700 mb-2 md:text-base">
                      Harga paket hanya
                    </p>
                    <h2 className="text-2xl font-bold text-green-600 mb-4">
                      Rp219.000{" "}
                      <span className="text-sm font-semibold">/bulan</span>{" "}
                    </h2>
                  </div>
                  <Button
                    isButton={false}
                    toWhere={urlText}
                    props={product?.id}
                    buttonText="Langganan Paket"
                    buttonType="primary"
                    onClick={() => {
                      console.log("click");
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-md">
                <h3 className="text-xl text-gray-950 font-bold md:text-2xl">
                  Daftar Menu
                </h3>
                <p className=" text-gray-700">
                  Terdapat{" "}
                  <span className="font-semibold">
                    {product?.totalMenu} menu{" "}
                  </span>
                  didalam paket ini
                </p>
                <ListMenu menus={product?.listMenu} />
              </div>
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
