import { useEffect, useState, useRef } from "react";

export function useTimer() {
  //Timer states
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [workMode, setWorkMode] = useState(true);

  // Timer settings
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(2);
  const [totalLoops, setTotalLoops] = useState(2);

  // Current session tracking
  const [timeLeft, setTimeLeft] = useState(workDuration * 60);
  const [currentLoop, setCurrentLoop] = useState(1);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((currentTime) => {
        return currentTime - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isPaused]);

  useEffect(() => {
    if (timeLeft !== 0 || !isRunning || isPaused) return;
    {
      if (workMode) {
        setWorkMode(false);
        setTimeLeft(breakDuration * 60);
      } else {
        if (currentLoop >= totalLoops) {
          setIsRunning(false);
          setWorkMode(true);
          setCurrentLoop(1);
          setTimeLeft(workDuration * 60);
        } else {
          setWorkMode(true);
          setCurrentLoop((loop) => loop + 1);
          setTimeLeft(workDuration * 60);
        }
      }
    }
  }, [
    timeLeft,
    isRunning,
    isPaused,
    workMode,
    currentLoop,
    totalLoops,
    breakDuration,
    workDuration,
  ]);

  const start = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pause = () => {
    setIsPaused(true);
  };

  const reset = (newWorkDuration, newBreakDuration, newTotalLoops) => {
    const workTime =
      newWorkDuration !== undefined ? newWorkDuration : workDuration;

    setIsRunning(false);
    setIsPaused(false);
    setWorkMode(true);
    setCurrentLoop(1);
    setTimeLeft(workTime * 60);

    if (newWorkDuration !== undefined) setWorkDuration(newWorkDuration);
    if (newBreakDuration !== undefined) setBreakDuration(newBreakDuration);
    if (newTotalLoops !== undefined) setTotalLoops(newTotalLoops);
  };

  const status = isPaused
    ? "Paused"
    : !isRunning
      ? "Idle"
      : workMode
        ? "Working"
        : "Break";

  return {
    isRunning,
    isPaused,
    timeLeft,
    currentLoop,
    totalLoops,
    status,
    start,
    pause,
    reset,
    setWorkDuration,
    setBreakDuration,
    setTotalLoops,
  };
}
