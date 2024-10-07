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

  imageLink: string;
  packageName: string;
  summaryPackage: string;
  listMenu?: [];
  totalMenu: number;
  onClick?: () => void;
}

export interface MenuItemProps {
  image: string;
  menuName: string;
  description: string;
}

export interface ListMenuProps {
  menus: MenuItemProps[] | undefined;
}
