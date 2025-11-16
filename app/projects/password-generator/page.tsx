"use client";

import { characters } from "@/src/lib/characters";
import { useState } from "react";

export default function PasswordGeneratorPage() {
  const [passwords, setPasswords] = useState<Array<string>>([
    newPassword(),
    newPassword(),
  ]);

  function newPassword(length = 15) {
    let output = "";
    for (let i = 0; i < length; i++) {
      output += characters[Math.floor(Math.random() * characters.length)];
    }
    return output;
  }

  function generatePasswords() {
    setPasswords([newPassword(), newPassword()]);
  }

  async function copyPassword(i: number) {
    try {
      await navigator.clipboard.writeText(passwords[i]);
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return (
    <main className="bg-neutral-900 min-h-screen p-8">
      <h1 className="sr-only">Password Generator</h1>
      <section className="bg-slate-800 px-10 py-15 rounded max-w-300 m-auto">
        <h2 className="text-white text-3xl font-bold">
          Generate a <span className="text-green-300">random password</span>
        </h2>
        <p className="text-slate-400 mt-2">
          Never use an insecure password again.
        </p>
        <button
          onClick={generatePasswords}
          className="cursor-pointer active:bg-green-200 active:text-green-500 hover:bg-green-100 bg-green-300 font-bold text-slate-800 px-3 py-2 rounded-md mt-10"
        >
          Generate passwords
        </button>
        <hr className="text-slate-700 outline-1 rounded mt-10" />
        <p className="flex justify-center text-slate-400 mt-5 mb-5 uppercase tracking-widest text-sm">
          &darr; Copy password &darr;
        </p>
        <div className="grid grid-cols-2 gap-5">
          <button
            className="cursor-copy enabled:active:bg-slate-500 enabled:hover:bg-slate-600 disabled:cursor-not-allowed text-green-200 bg-slate-700 h-10 w-full rounded"
            disabled={passwords[0] ? false : true}
            onClick={() => copyPassword(0)}
          >
            {passwords[0] ? passwords[0] : ""}
          </button>
          <button
            className="cursor-copy enabled:active:bg-slate-500 enabled:hover:bg-slate-600 disabled:cursor-not-allowed  text-green-200 bg-slate-700 h-10 w-full rounded"
            disabled={passwords[1] ? false : true}
            onClick={() => copyPassword(1)}
          >
            {passwords[1] ? passwords[1] : ""}
          </button>
        </div>
      </section>
    </main>
  );
}
