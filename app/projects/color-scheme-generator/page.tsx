"use client";

import { useState, useEffect, FormEvent } from "react";

import { nanoid } from "nanoid";

import tailwindColors from "@/src/data/tailwind-colors.json";

type Color = {
  r: number;
  g: number;
  b: number;
};

function colorDistance(c1: Color, c2: Color) {
  const r = (c1.r - c2.r) * 0.299;
  const g = (c1.g - c2.g) * 0.587;
  const b = (c1.b - c2.b) * 0.114;
  return Math.sqrt(r * r + g * g + b * b);
}

function returnClosestMatch(c1: Color) {
  const tailwindColorArr = [...tailwindColors].sort(
    (a: { color: string; code: Color }, b: { color: string; code: Color }) =>
      colorDistance(a.code, c1) - colorDistance(b.code, c1)
  );
  return tailwindColorArr[0];
}

export default function ColorSchemeGeneratorPage() {
  const [colors, setColors] = useState([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const inputColor = formData.get("input-color") as string;
    const inputMode = formData.get("scheme-type") as string;
    e.preventDefault();
    try {
      const res = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${inputColor.replace(
          "#",
          ""
        )}&mode=${inputMode}`
      );
      const data = await res.json();
      setColors(
        data.colors.map((colorData: { rgb: Color }) => {
          const { code, color } = returnClosestMatch(colorData.rgb);
          return {
            r: code.r,
            g: code.g,
            b: code.b,
            colorName: color,
          };
        })
      );
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <header>
        <form className="flex p-6 gap-4 shadow-md" onSubmit={handleSubmit}>
          <input
            type="color"
            name="input-color"
            id="input-color"
            className="min-w-15 aspect-4/3 h-auto outline-1 outline-neutral-400 rounded"
          />
          <select
            name="scheme-type"
            id="scheme-type"
            aria-label="Choose your color scheme."
            className="bg-neutral-100 outline-1 outline-neutral-400 p-2 rounded w-full"
          >
            <option value="monochrome">Monochromatic</option>
            <option value="monochrome-dark">Monochromatic Dark</option>
            <option value="monochrome-light">Monochromatic Light</option>
            <option value="analogic">Analogous</option>
            <option value="complement">Complementary</option>
            <option value="analogic-complement">Analogous Complementary</option>
            <option value="triad">Triadic</option>
          </select>
          <button
            type="submit"
            className="active:bg-red-400 bg-neutral-100 outline-1 outline-neutral-400 py-2 px-4 rounded min-w-fit"
          >
            Get Color Scheme
          </button>
        </form>
      </header>
      <main className="flex justify-between w-full h-140">
        {colors.map(
          (color: { r: number; g: number; b: number; colorName: string }) => {
            return (
              <div className="flex flex-col w-full">
                <div
                  key={nanoid()}
                  style={{
                    backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
                  }}
                  className="h-full w-full flex"
                ></div>
                <div className="w-full text-center mt-4 text-md font-bold">
                  {color.colorName}
                </div>
              </div>
            );
          }
        )}
      </main>
    </>
  );
}
