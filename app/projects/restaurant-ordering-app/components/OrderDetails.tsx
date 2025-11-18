import type { MenuItem } from "../types/MenuItem";

import { Smythe } from "next/font/google";

const smythe = Smythe({
  weight: "400",
  subsets: ["latin"],
});

type OrderDetailsProps = {
  order: MenuItem[];
  removeFromOrder: (item: MenuItem) => void;
  completeOrder: () => void;
};

export default function OrderDetails({
  order,
  removeFromOrder,
  completeOrder,
}: OrderDetailsProps) {
  return (
    <section className="mx-8">
      <h2 className={`${smythe.className} text-2xl text-center mt-4`}>
        Your Order
      </h2>
      <ul>
        {order.map((item) => (
          <li key={item.id} className="flex gap-2">
            <span className={`${smythe.className} text-xl`}>{item.name}</span>
            <button
              className="active:text-red-400 hover:text-red-700 hover:underline text-sm text-neutral-400 font-light"
              onClick={() => removeFromOrder(item)}
            >
              remove
            </button>
            <span className={`${smythe.className} ml-auto`}>${item.price}</span>
          </li>
        ))}
      </ul>
      <hr />
      <p className={`${smythe.className} flex justify-between text-lg mt-3`}>
        Total price: <span>${order.reduce((a, b) => a + b.price, 0)}</span>
      </p>
      <button
        onClick={completeOrder}
        className="active:bg-emerald-300 hover:bg-emerald-500 bg-emerald-400 text-white w-full mt-5 py-2 mb-8 rounded"
      >
        Complete Order
      </button>
    </section>
  );
}
