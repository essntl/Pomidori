import Link from "next/link";

function Footer() {
  return (
    <div className="flex justify-between items-center bg-white/50 dark:bg-gray-950/30 m-4 p-4 rounded-xl flex-col md:flex-row">
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
      <div className="flex items-center pl-4 gap-4 pr-8">
        <ul className="flex gap-4 text-lg dark:text-gray-200">

        </ul>
      </div>
    </div>
  );
}

export default Footer;
