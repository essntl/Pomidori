"use client";

import { createContext, useContext, ReactNode } from "react";
import { useTimer } from "../hooks/useTimer";

type TimerContextType = ReturnType<typeof useTimer>;

const TimerContext = createContext<TimerContextType | null>(null);

type TimerProviderProps = {
  children: ReactNode;
};

export function TimerProvider({ children }: TimerProviderProps) {
  const timer = useTimer();
  return <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>;
}

export function useTimerContext() {
  const ctx = useContext(TimerContext);
  if (!ctx) {
    throw new Error("useTimerContext must be used inside TimerProvider");
  }
  return ctx;
}