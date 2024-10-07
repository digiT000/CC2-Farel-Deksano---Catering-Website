import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchSingleProduct } from "@/utils/api";
import { PackageProps } from "@/utils/interface";
import PageTemplate from "@/components/PageTemplate";
import ListMenu from "@/components/ListMenu";

export default function PackageDetail() {
  const router = useRouter();
  console.log("Router", router.query);
  const { packageId } = router.query;
  console.log(typeof packageId);

  const [product, setProduct] = useState<PackageProps | null>(null);
  // console.log(packageId);

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
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct(packageId);
  }, [router.query]);

  console.log("List Menu:", product?.listMenu);

  return (
    <main>
      <section className="px-4">
        <div className="max-w-screen-lg mx-auto ">
          <div className="grid grid-cols-3 gap-5">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="col-span-2 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl text-gray-950 font-bold">
                  {product?.packageName}
                </h1>
                <p className=" text-gray-700">{product?.summaryPackage}</p>
              </div>

              <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-md">
                <h3 className="text-xl text-gray-950 font-bold">Daftar Menu</h3>
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
            {/* Side Bar */}
            {/* <div className="p-5 bg-green-50 rounded-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                eius quod possimus numquam perferendis officiis laborum error
                modi et a, tempore cumque aspernatur, incidunt optio,
                reprehenderit laudantium porro beatae deleniti.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
