"use client";

import Overlay from "./Overlay";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div className="flex justify-between items-center m-4 flex-row">
      <div className="relative flex flex-row items-center gap-2 cursor-pointer p-2 rounded-xl bg-white/50 dark:bg-gray-800/30 shadow-xl ">
        <img src="/images/logo.png" alt="logo" width="48" className="block" />
        <h1 className="text-3xl font-bold text-purple-950/80 mt-1 dark:text-purple-200 transition-colors duration-300">
          Pomidori
        </h1>
      </div>
      <div className="flex items-center gap-4 md:gap-8 p-2 text-white rounded-xl bg-white/50 dark:bg-gray-800/30 shadow-xl">
        <h1>Island</h1>
      </div>
      <div className="flex items-center gap-4 md:gap-8 p-2 rounded-xl bg-white/50 dark:bg-gray-800/30 shadow-xl">
        <button
          onClick={() => setIsOverlayOpen(!isOverlayOpen)}
          className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.25 group"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-gray-800 dark:bg-white transition-all duration-300 ease-in-out ${
              isOverlayOpen ? "rotate-45 translate-y-1.75" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-gray-800 dark:bg-white transition-all duration-300 ease-in-out ${
              isOverlayOpen ? "opacity-0 scale-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-gray-800 dark:bg-white transition-all duration-300 ease-in-out ${
              isOverlayOpen ? "-rotate-45 -translate-y-1.75" : ""
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        <Overlay
          isOpen={isOverlayOpen}
          onClose={() => setIsOverlayOpen(false)}
        />
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
