"use client";

import Link from "next/link";
import DarkModeToggle from "../ui/DarkModeToggle";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white/50 dark:bg-gray-800/30 m-4 p-6 rounded-xl flex-col md:flex-row shadow-xl">
      <div className="relative inline-block cursor-pointer">
        <img
          src="/images/logofull.png"
          alt="logo"
          width="200"
          className="block transition-opacity duration-500 opacity-100 dark:opacity-0"
        />
        <img
          src="/images/darklogofull.png"
          alt="logo"
          width="200"
          className="absolute top-0 left-0 transition-opacity duration-500 opacity-0 dark:opacity-100"
        />
      </div>
      <div className="flex items-center pl-8 gap-4 md:gap-8">
        <ul className="flex gap-4 text-lg dark:text-gray-200">
          <li>
            <Link
              className="inline-block hover:scale-110 duration-300 transition-all"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="inline-block hover:scale-110 duration-300 transition-all"
              href="/app"
            >
              App
            </Link>
          </li>
        </ul>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
