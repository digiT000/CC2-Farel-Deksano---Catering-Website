import axios from "axios";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export async function fetchDataProduct(env: string) {
  const response = await axios.get(
    `/spaces/2gchvvxde1g0/environments/master/entries?access_token=${ACCESS_TOKEN}`
  );
  return response.data;
}
