"use client";

import TimerCircle from "./TimerCircle";
import TimerControls from "./TimerControls";
import { TimerProvider } from "../../context/TimerContext";

function PomodoroTimer() {
  return (
    <div className="flex lg:flex-3 lg:max-w-[30%] flex-col m-4 p-6 bg-white/50 dark:bg-gray-800/30 rounded-xl shadow-xl gap-2">
      <h1 className="text-3xl font-bold dark:text-white">Timer</h1>
      <TimerProvider>
        <TimerCircle />
        <TimerControls />
      </TimerProvider>
    </div>
  );
}

export default PomodoroTimer;
