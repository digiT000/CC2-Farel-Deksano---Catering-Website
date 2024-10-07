import { MenuItemProps, ListMenuProps } from "@/utils/interface";
import MenuItem from "./menuItem";

function ListMenu({ menus }: ListMenuProps) {
  return (
    <ul className="list-none">
      {menus?.map((menuItem: MenuItemProps, key: number) => {
        return (
          <MenuItem
            key={}
            image={menuItem.image}
            menuName={menuItem.menuName}
            description={menuItem.description}
          />
        );
      })}
    </ul>
  );
}

export default ListMenu;
