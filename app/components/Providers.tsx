"use client";

import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

// Inner component that applies the dark class
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
    <ThemeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
}
