import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12 px-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
        <Image
          src="/images/logo.png"
          alt="Pomidori logo"
          width={186}
          height={186}
        />
        <h1 className="text-4xl md:text-5xl font-bold dark:text-white">
          The only Pomodoro site you'll ever need
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to Pomidori, the ultimate Pomodoro timer.
          <br />
          Optimize your work with a timer, task calendar, and notes section all
          in one place.
        </p>
        <Link
          href="/app"
          className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg"
        >
          Get started
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 p-6 bg-white/50 dark:bg-gray-800/30 rounded-xl shadow-lg">
          <Image
            src="/images/logo.png"
            alt="timer icon"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-bold dark:text-white">Pomodoro Timer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Stay focused with a customizable Pomodoro timer. Set your work and
            break intervals to suit your productivity style.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-4 p-6 bg-white/50 dark:bg-gray-800/30 rounded-xl shadow-lg">
          <Image
            src="/images/calendar.png"
            alt="calendar icon"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-bold dark:text-white">Task Calendar</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Organize your tasks and deadlines with an integrated calendar. Plan
            your work sessions around your schedule.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-4 p-6 bg-white/50 dark:bg-gray-800/30 rounded-xl shadow-lg">
          <Image
            src="/images/list.png"
            alt="notes icon"
            width={96}
            height={96}
          />
          <h2 className="text-xl font-bold dark:text-white">Notes Section</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Write down important points, ideas, or reflections in a dedicated notes and to-do list section.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto bg-white/50 dark:bg-gray-800/30 p-8 rounded-xl shadow-lg">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold dark:text-white">About Pomidori</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Pomidori was made as a project for <strong>Codedex</strong> and as a
            tool I plan to use myself. This is a passion project, built with care
            and dedication to productivity.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            You can view the source code and follow the project's progress on my
            GitHub by pressing the button below!
          </p>
          <p className="text-gray-600 dark:text-gray-300 font-medium">
            Made by essential
          </p>
          <a
            href="https://github.com/essntl/pomidori"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit mt-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            View on GitHub
          </a>
        </div>
        <Image
          src="/images/logo.png"
          alt="about illustration"
          width={400}
          height={400}
          className="flex-shrink-0"
        />
      </section>
    </div>
  );
}
