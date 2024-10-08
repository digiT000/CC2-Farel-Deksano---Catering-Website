import { MenuItemProps } from "@/utils/interface";

function MenuItem({ menuName, description, number }: MenuItemProps) {
  return (
    <li className="py-4 border-b border-b-gray-200 flex gap-4 md:gap-6">
      <h3 className="text-xl font-bold md:text-2xl">{number}</h3>
      <div>
        <h4 className="text-sm font-semibold text-gray-950 mb-2 mt-[4px] md:text-base">
          {menuName}
        </h4>
        <p className="text-sm text-gray-700 md:text-base">{description}</p>
      </div>
    </li>
  );
}

export default MenuItem;
