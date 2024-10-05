export interface MenuProps {
  image: string;
  menuName: string;
  description: string;
}

export interface ResponsePackage {
  fields: PackageProps;
}

export interface PackageProps {
  imageLink: string;
  packageName: string;
  summaryPackage: string;
  listMenu?: [];
  totalMenu: number;
}
