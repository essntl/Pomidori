import { useEffect, useState } from "react";

export function useTimer() {
  //Timer states
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [workMode, setWorkMode] = useState(true);

  // Timer settings
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [totalLoops, setTotalLoops] = useState(2);

  // Current session tracking
  const [timeLeft, setTimeLeft] = useState(workDuration * 60);
  const [currentLoop, setCurrentLoop] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((currentTime) => {
        if (currentTime < 1 && workMode) {
          setWorkMode(false);
          setTimeLeft(breakDuration * 60);
        } 
        return currentTime--;
      });
    });
  }, 1000);

  if (!isRunning) {
    setIsRunning(true);
    function updateTimer() {
      timeLeft--;
      if (timeLeft < 1) {
        setIsRunning(false);
      }
    }
  }
}
