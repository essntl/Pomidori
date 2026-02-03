import { useState } from "react";
import { useTimerContext } from "../../context/TimerContext";

function TimerSettings({ isOpen, onClose }) {
  const {
    workDuration,
    breakDuration,
    totalLoops,
    reset,
  } = useTimerContext();

  const [work, setWork] = useState(workDuration || 25);
  const [breakTime, setBreakTime] = useState(breakDuration || 5);
  const [loops, setLoops] = useState(totalLoops || 2);

  const handleSave = () => {
    if (
      work < 1 ||
      work > 360 ||
      breakTime < 1 ||
      breakTime > 360 ||
      loops < 1 ||
      loops > 15
    ) {
      alert(
        "Please enter valid work (1-360 min), break (1-360 min), and loops (1-15).",
      );
      return;
    }
    reset(work, breakTime, loops);
    onClose();
  };
if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          Timer Settings
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              Work Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="360"
              value={work}
              onChange={(e) => setWork(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              Break Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="360"
              value={breakTime}
              onChange={(e) => setBreakTime(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              Total Loops
            </label>
            <input
              type="number"
              min="1"
              max="15"
              value={loops}
              onChange={(e) => setLoops(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 rounded dark:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 rounded dark:text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimerSettings;
