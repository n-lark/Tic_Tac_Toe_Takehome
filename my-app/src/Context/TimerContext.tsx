import React, { useState, createContext } from "react";

type TimerContextType = {
  timer: number;
  incrementTimer: () => void;
  resetTimer: () => void;
};

const TimerContextDefaultValues: TimerContextType = {
  timer: 0,
  incrementTimer: () => {},
  resetTimer: () => {},
};

export const TimerContext = createContext<TimerContextType>(
  TimerContextDefaultValues
);

export const TimerContextProvider: React.FC = ({ children }) => {
  const [timer, setTimer] = useState<number>(TimerContextDefaultValues.timer);

  const incrementTimer = () => setTimer((timer) => (timer += 1));
  const resetTimer = () => setTimer(TimerContextDefaultValues.timer);

  return (
    <TimerContext.Provider
      value={{
        timer,
        incrementTimer,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
