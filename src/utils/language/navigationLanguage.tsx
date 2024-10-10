export interface Navigationprops {
  [key: string]: {
    [key: string]: string;
  };
}

export const navigationLanguage: Navigationprops = {
  id: {
    menu_home: "Home",
    menu_cateringPackage: "Paket Katering",
    menu_aboutUs: "Tentang Kami",
  },
  en: {
    menu_home: "Home",
    menu_cateringPackage: "Catering Package",
    menu_aboutUs: "About Us",
  },
};
