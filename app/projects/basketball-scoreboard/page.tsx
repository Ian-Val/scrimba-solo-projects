"use client";

import { useState } from "react";

type Score = {
  home: number;
  guest: number;
};

type ScoreButtonProps = {
  scorePoint: (team: "home" | "guest", amount: number) => void;
  amount: number;
  team: "home" | "guest";
};

function ScoreButton({ scorePoint, amount, team }: ScoreButtonProps) {
  return (
    <>
      <button
        onClick={() => {
          scorePoint(team, amount);
        }}
        className="text-blue-300 border-2 p-1 text-sm font-bold font-mono rounded-sm active:text-blue-50 active:bg-blue-500 hover:bg-blue-800"
      >
        +{amount}
      </button>
    </>
  );
}

export default function ScoreboardPage() {
  const [score, setScore] = useState<Score>({ home: 0, guest: 0 });

  function scorePoint(team: "home" | "guest", amount: number) {
    setScore(
      (prevScore): Score => ({
        home: team === "home" ? prevScore.home + amount : prevScore.home,
        guest: team === "guest" ? prevScore.guest + amount : prevScore.guest,
      }),
    );
  }

  return (
    <main className="bg-blue-950 min-h-screen p-10">
      <h1 className="sr-only">Basketball Scoreboard</h1>
      <a
        href="mailto:recipient@example.com?
subject=Check%20this%20image&
body=<img%20src=%22https://cdn.pixabay.com/photo/2024/08/26/23/39/maranhao-sheets-9000416_1280.jpg%22%20alt=%22Image%22%20style=%22max-width:100%25;%22%20/%3E%0D%0A%0D%0AHello,%0D%0A%0D%0APlease%20see%20the%20image%20above."
      >
        Send Email with HTML Image
      </a>
      <section className="grid grid-cols-2 gap-15">
        <div className="flex flex-col items-center gap-3">
          <h2 className="uppercase font-bold text-neutral-50 text-3xl">home</h2>
          <div className="text-6xl text-red-400 bg-neutral-950 flex justify-center items-center py-4 px-10 font-mono min-w-full">
            {score.home}
          </div>
          <div className="grid grid-cols-3 gap-3 min-w-full">
            <ScoreButton scorePoint={scorePoint} amount={1} team="home" />
            <ScoreButton scorePoint={scorePoint} amount={2} team="home" />
            <ScoreButton scorePoint={scorePoint} amount={3} team="home" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h2 className="uppercase font-bold text-neutral-50 text-3xl">
            guest
          </h2>
          <div className="text-6xl text-red-400 bg-neutral-950 flex justify-center items-center py-4 px-10 font-mono min-w-full">
            {score.guest}
          </div>
          <div className="grid grid-cols-3 gap-3 min-w-full">
            <ScoreButton scorePoint={scorePoint} amount={1} team="guest" />
            <ScoreButton scorePoint={scorePoint} amount={2} team="guest" />
            <ScoreButton scorePoint={scorePoint} amount={3} team="guest" />
          </div>
        </div>
      </section>
    </main>
  );
}
