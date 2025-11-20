"use client";

import { useState, useEffect, FormEvent } from "react";

import { nanoid } from "nanoid";

import tailwindColors from "@/src/data/tailwind-colors.json";

function colorDistance(
  c1: { r: number; g: number; b: number },
  c2: { r: number; g: number; b: number }
) {
  const rDist = Math.abs(c1.r - c2.r);
  const gDist = Math.abs(c1.g - c2.g);
  const bDist = Math.abs(c1.b - c2.b);
  return rDist + gDist + bDist;
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
      console.log(data);
      setColors(
        data.colors.map(
          (colorData: { rgb: { r: number; g: number; b: number } }) => {
            return {
              r: colorData.rgb.r,
              g: colorData.rgb.g,
              b: colorData.rgb.b,
            };
          }
        )
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
        {colors.map((color: { r: number; g: number; b: number }) => {
          return (
            <div
              key={nanoid()}
              style={{
                backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
              }}
              className="h-full w-full"
            ></div>
          );
        })}
      </main>
    </>
  );
}
