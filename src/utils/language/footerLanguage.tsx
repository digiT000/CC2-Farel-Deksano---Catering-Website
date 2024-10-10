import { navigationLanguage } from "./navigationLanguage";

export interface LanguageFooterProps {
  [key: string]: {
    description: string;
    menus: object;
  };
}

export const LanguageFooter: LanguageFooterProps = {
  id: {
    description:
      "Dibuat karena Kami peduli dengan para pejuang rupiah yang sering kali lupa menjaga makan karena sibuknya bekerja",
    menus: navigationLanguage,
  },
};
