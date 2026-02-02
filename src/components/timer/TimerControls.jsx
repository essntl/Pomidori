import { useTimerContext } from "../../context/TimerContext";

function TimerControls() {
  const { start, pause, reset, isRunning, isPaused } = useTimerContext();

  const handleStartPause = () => {
    if (isRunning && !isPaused) {
      pause();
    } else {
      start();
    }
  };

  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <button
          className="rounded-md transition-colors duration-300 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700px-4 py-2 dark:text-white min-w-25"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="rounded-md transition-colors duration-300 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 px-4 py-2 dark:text-white min-w-25"
          onClick={handleStartPause}
        >
          {isRunning && !isPaused ? "Pause" : "Start"}
        </button>
        <button className="rounded-md transition-colors duration-300 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 px-4 py-2 dark:text-white min-w-25">
          Settings
        </button>
      </div>
    </>
  );
}

export default TimerControls;