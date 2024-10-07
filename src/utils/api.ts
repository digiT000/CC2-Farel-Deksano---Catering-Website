import axios from "axios";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export async function fetchDataProduct() {
  const response = await axios.get(
    `/spaces/2gchvvxde1g0/environments/master/entries?access_token=${ACCESS_TOKEN}`
  );
  console.log(response);
  return response.data;
}

export async function fetchSingleProduct(
  packageId: string | string[] | undefined
) {
  const response = await axios.get(
    `/spaces/2gchvvxde1g0/environments/master/entries/${packageId}?access_token=${ACCESS_TOKEN}`
  );
  return response.data;
}
