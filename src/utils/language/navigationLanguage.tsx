export interface Navigationprops {
  [key: string]: {
    [key: string]: string;
  };
}

enum NAVIGATION_TYPE {
  MENU_HOME = "home",
  MENU_CATERING_PACKAGE = "catering_package",
  MENU_ABOUT_US = "about_us",
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
