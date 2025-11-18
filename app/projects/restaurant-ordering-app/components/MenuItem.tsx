import type { MenuItem } from "../types/MenuItem";
import { Smythe } from "next/font/google";

const smythe = Smythe({
  weight: "400",
  subsets: ["latin"],
});

type MenuItemProps = {
  itemData: MenuItem;
  addToOrder: (item: MenuItem) => void;
};

export default function MenuItem({ itemData, addToOrder }: MenuItemProps) {
  return (
    <article>
      <div className="flex justify-between items-center gap-6 py-10 px-8">
        <div className="text-7xl">{itemData.emoji}</div>
        <div className="mr-auto">
          <h2 className={`font-semibold text-2xl ${smythe.className}`}>
            {itemData.name}
          </h2>
          <p className={`text-neutral-700 ${smythe.className}`}>
            {itemData.ingredients.join(", ")}
          </p>
          <p className={`font-bold text-lg ${smythe.className}`}>
            ${itemData.price}
          </p>
        </div>
        <div>
          <button
            onClick={() => addToOrder(itemData)}
            className="active:bg-emerald-50 hover:bg-emerald-200 hover:text-bg-emerald-700 w-10 h-10 rounded-full border flex justify-center items-center text-neutral-300"
          >
            <span className="text-neutral-600 text-2xl -translate-y-0.5">
              +
            </span>
          </button>
        </div>
      </div>
      <hr className="mt-0 mx-8 text-neutral-200" />
    </article>
  );
}
