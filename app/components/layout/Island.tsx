"use client";

import { useTimerContext } from "../../context/TimerContext";

function Island() {
  const { status, currentLoop, totalLoops, timeLeft } = useTimerContext();

  const hours = Math.floor(timeLeft / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeLeft % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="flex items-center  p-2 md:mr-35 text-black dark:text-white rounded-xl bg-white/50 dark:bg-gray-800/30 shadow-xl">
    <span className="status font-medium">{status}</span>
    <span className="mx-2">—</span>
    <span className="time">
      <span className="hours">{hours}</span>:
      <span className="minutes">{minutes}</span>:
      <span className="seconds">{seconds}</span>
    </span>
    <span className="mx-2">—</span>
    <span className="loop">Loop {currentLoop}/{totalLoops}</span>
    </div>
  );
}

export default Island;
