import { MenuItemProps, ListMenuProps } from "@/utils/interface";
import MenuItem from "./MenuItem";

function ListMenu({ menus }: ListMenuProps) {
  return (
    <ul className="list-none">
      {menus?.map((menuItem: MenuItemProps, key: number) => {
        return (
          <MenuItem
            key={key}
            number={key + 1}
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
