"use client";

import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { TimerProvider } from "../context/TimerContext";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

function ThemeWrapper({ children }: { children: ReactNode }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? "dark" : ""}>
      {children}
    </div>
  );
}

export function Providers({ children }: ProvidersProps) {
  return (
    <TimerProvider>
      <ThemeProvider>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </ThemeProvider>
    </TimerProvider>
  );
}