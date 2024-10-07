import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import LanguageProvider from "@/context/languageContext";

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
