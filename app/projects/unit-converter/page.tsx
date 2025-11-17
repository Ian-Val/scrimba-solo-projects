"use client";
import { useState, useEffect, useRef } from "react";
import { FormEvent } from "react";

export default function UnitConverterPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputNumber, setInputNumber] = useState<number | null>(20);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const raw = formData.get("input-number");
    const value = raw ? parseFloat(raw as string) : null;

    setInputNumber(!isNaN(value as number) ? value : null);
    if (!inputRef.current) return;
    inputRef.current.focus();
  }

  const lengthText =
    inputNumber &&
    `${inputNumber.toFixed(3)} meters = ${(
      (inputNumber as number) * 3.281
    ).toFixed(3)} feet | ${inputNumber.toFixed(3)} feet = ${(
      (inputNumber as number) / 3.281
    ).toFixed(3)} meters`;
  const volumeText =
    inputNumber &&
    `${inputNumber.toFixed(3)} liters = ${(
      (inputNumber as number) * 0.264
    ).toFixed(3)} gallons | ${inputNumber.toFixed(3)} gallons = ${(
      (inputNumber as number) / 0.264
    ).toFixed(3)} liters`;
  const massText =
    inputNumber &&
    `${inputNumber.toFixed(3)} kilos = ${(
      (inputNumber as number) * 2.204
    ).toFixed(3)} pounds | ${inputNumber.toFixed(3)} pounds = ${(
      (inputNumber as number) / 2.204
    ).toFixed(3)} kilos `;

  return (
    <>
      <main className="bg-neutral-100 min-h-screen">
        <section className="bg-indigo-600 flex flex-col items-center p-10">
          <h1 className="text-3xl font-extrabold text-white mb-5">
            Metric/Imperial Unit Conversion
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center ">
            <input
              ref={inputRef}
              type="number"
              name="input-number"
              id="input-number"
              aria-label="Please input a number that you would like to convert into 
              Imperial Length, Volume, and Mass"
              min={0.01}
              step="any"
              defaultValue={20}
              className="text-center text-white bg-indigo-500 border-indigo-300 py-4 border-2 rounded-xl text-6xl mb-5 font-bold w-40"
            />
            <button
              type="submit"
              className="active:bg-indigo-100 hover:text-indigo-500  cursor-pointer text-center bg-white  py-3 w-40 rounded-xl tracking-wider text-indigo-800 text-2xl "
            >
              Covert
            </button>
          </form>
        </section>
        <section className="bg-neutral-100">
          <div className="bg-white m-8 p-6 flex flex-col items-center text-xl gap-4 text-indigo-950 rounded-xl">
            <h2 className="font-semibold text-2xl">Length (Meter/Feet)</h2>
            {inputNumber && <p>{lengthText}</p>}
          </div>
          <div className="bg-white m-8 p-6 flex flex-col items-center text-xl gap-4 text-indigo-950 rounded-xl">
            <h2 className="font-semibold text-2xl">Volume (Liters/Gallon)</h2>
            {inputNumber && <p>{volumeText}</p>}
          </div>
          <div className="bg-white m-8 p-6 flex flex-col items-center text-xl gap-4 text-indigo-950 rounded-xl">
            <h2 className="font-semibold text-2xl">Mass (Kilograms/Pounds)</h2>
            {inputNumber && <p>{massText}</p>}
          </div>
        </section>
      </main>
    </>
  );
}
