import { useReducer, useEffect, useRef } from 'react';

type TimerState = {
  isRunning: boolean;
  isPaused: boolean;
  workMode: boolean;
  timeLeft: number;
  currentLoop: number;
  workDuration: number;
  breakDuration: number;
  totalLoops: number;
};

type TimerAction =
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'RESET' }
  | { type: 'TICK' }
  | { type: 'PHASE_COMPLETE' }
  | { type: 'UPDATE_SETTINGS'; workDuration: number; breakDuration: number; totalLoops: number };

const initialState: TimerState = {
  isRunning: false,
  isPaused: false,
  workMode: true,
  timeLeft: 25 * 60,
  currentLoop: 1,
  workDuration: 25,
  breakDuration: 5,
  totalLoops: 2,
};

function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true, isPaused: false };

    case 'PAUSE':
      return { ...state, isPaused: true };

    case 'RESET':
      return {
        ...state,
        isRunning: false,
        isPaused: false,
        workMode: true,
        currentLoop: 1,
        timeLeft: state.workDuration * 60,
      };

    case 'TICK':
      if (!state.isRunning || state.isPaused) return state;
      return { ...state, timeLeft: state.timeLeft - 1 };

    case 'PHASE_COMPLETE':
      if (state.workMode) {
        return {
          ...state,
          workMode: false,
          timeLeft: state.breakDuration * 60,
        };
      }
      if (state.currentLoop >= state.totalLoops) {
        return {
          ...state,
          isRunning: false,
          workMode: true,
          currentLoop: 1,
          timeLeft: state.workDuration * 60,
        };
      }
      return {
        ...state,
        workMode: true,
        currentLoop: state.currentLoop + 1,
        timeLeft: state.workDuration * 60,
      };

    case 'UPDATE_SETTINGS':
      return {
        ...state,
        workDuration: action.workDuration,
        breakDuration: action.breakDuration,
        totalLoops: action.totalLoops,
        isRunning: false,
        isPaused: false,
        workMode: true,
        currentLoop: 1,
        timeLeft: action.workDuration * 60,
      };

    default:
      return state;
  }
}


export function useTimer() {
  const [state, dispatch] = useReducer(timerReducer, initialState);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (state.isRunning && !state.isPaused) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.isRunning, state.isPaused]);

  useEffect(() => {
    if (state.timeLeft === 0 && state.isRunning && !state.isPaused) {
      dispatch({ type: 'PHASE_COMPLETE' });
    }
  }, [state.timeLeft, state.isRunning, state.isPaused]);

  const status = state.isPaused
    ? 'Paused'
    : !state.isRunning
      ? 'Idle'
      : state.workMode
        ? 'Working'
        : 'Break';

  return {
    isRunning: state.isRunning,
    isPaused: state.isPaused,
    timeLeft: state.timeLeft,
    currentLoop: state.currentLoop,
    totalLoops: state.totalLoops,
    workDuration: state.workDuration,
    breakDuration: state.breakDuration,
    status,
    start: () => dispatch({ type: 'START' }),
    pause: () => dispatch({ type: 'PAUSE' }),
    reset: () => dispatch({ type: 'RESET' }),
    updateSettings: (workDuration: number, breakDuration: number, totalLoops: number) =>
      dispatch({ type: 'UPDATE_SETTINGS', workDuration, breakDuration, totalLoops }),
  };
}
