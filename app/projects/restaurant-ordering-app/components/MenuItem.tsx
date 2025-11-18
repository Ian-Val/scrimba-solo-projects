import type { MenuItem } from "../types/MenuItem";

export default function MenuItem({ itemData }: { itemData: MenuItem }) {
  return (
    <article>
      <div className="flex justify-between items-center gap-6 py-4 px-8">
        <div className="text-7xl">{itemData.emoji}</div>
        <div className="mr-auto">
          <h2 className="font-semibold text-2xl ">{itemData.name}</h2>
          <p className="text-neutral-700">{itemData.ingredients.join(", ")}</p>
          <p className="font-bold">${itemData.price}</p>
        </div>
        <div>
          <button className="w-10 h-10 rounded-full border flex justify-center items-center text-neutral-300">
            <span className="text-neutral-600 text-2xl -translate-y-0.5">
              +
            </span>
          </button>
        </div>
      </div>
      <hr className="mt-6 mx-8 text-neutral-200" />
    </article>
  );
}
