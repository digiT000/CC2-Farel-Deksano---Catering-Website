import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface MenuProps {
  image: string;
  menuName: string;
  description: string;
}

export interface ResponsePackage {
  sys: {
    id: string;
  };
  fields: PackageProps;
}

export interface PackageProps {
  id: string;
  mainImage: StaticImport | string;
  imageLink: string;
  packageName: string;
  summaryPackage: string;
  listMenu?: [];
  totalMenu: number;
  onClick?: () => void;
}

export interface MenuItemProps {
  number: number;
  image: string;
  menuName: string;
  description: string;
}

export interface ListMenuProps {
  menus: MenuItemProps[] | undefined;
}

export interface TestimonialProps {
  description: string;
  name: string;
  detailProfile: string;
}

export interface SocialProofProps {
  image: StaticImport | string;
  title: string;
  description: string;
}
