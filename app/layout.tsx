import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pomodoro Timer",
  description: "A beautiful pomodoro timer app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-linear-to-t from-[#bcbcbc] to-white dark:from-[#222222] dark:to-black transition-all">
            <Navbar />
            <main className="flex-1 flex lg:flex-row justify-center flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
