// app/layout.tsx
import { Smythe } from "next/font/google";

const smythe = Smythe({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="w-full h-64 bg-[url(/images/restaurant/burger.jpg)] bg-cover bg-center gap-2 px-8 py-12 [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)]">
      <h1 className={`${smythe.className} text-6xl text-white pb-4`}>
        Jimmy's Burgers
      </h1>
      <p className={`${smythe.className} text-3xl text-white `}>
        The best burgers and pizzas in town.
      </p>
    </header>
  );
}
