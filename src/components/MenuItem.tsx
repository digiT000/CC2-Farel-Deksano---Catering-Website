import { MenuItemProps } from "@/utils/interface";

function MenuItem({ menuName, description }: MenuItemProps) {
  return (
    <li className="p-4 border-b border-b-gray-200">
      <h4 className="text-sm font-semibold text-gray-950 mb-2">{menuName}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </li>
  );
}

export default MenuItem;
