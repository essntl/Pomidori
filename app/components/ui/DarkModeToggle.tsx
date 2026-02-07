"use client";

import { useTheme } from "../../context/ThemeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center bg-white/20 hover:bg-white/30 dark:bg-blue-200/30 h-full w-full rounded-2xl transition-colors duration-400"
    >
      <span
        className={`
          absolute
          w-8 h-8 
          rounded-full 
          bg-[#f4f4f4]
          transition-all duration-300
          ${isDarkMode ? "bg-black shadow-[inset_12px_-8px_0px_-2px_#e1dfd5]" : ""}
        `}
      />
    </button>
  );
}

export default DarkModeToggle;
