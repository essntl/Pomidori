function TimerControls() {
  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <button className="rounded-md transition-colors duration-300 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700px-4 py-2 dark:text-white min-w-25">Reset</button>
        <button className="rounded-md transition-colors duration-300 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 px-4 py-2 dark:text-white min-w-25">Start</button>
        <button className="rounded-md transition-colors duration-300 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 px-4 py-2 dark:text-white min-w-25">Settings</button>
      </div>
    </>
  );
}

export default TimerControls;
