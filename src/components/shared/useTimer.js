import { useState, useCallback } from "react";
import useInterval from "./useInterval";

export default function useTimer() {
  const [timeout, setTimeout] = useState(null);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const resetTimer = useCallback(() => {
    setTimeout(1000);
    setSecondsElapsed(0);
  }, []);

  const stopTimer = useCallback(() => {
    setTimeout(null);
  }, []);

  useInterval(() => {
    const newSecondsElapsed = secondsElapsed + 1;
    setSecondsElapsed(newSecondsElapsed);
  }, timeout);

  return { resetTimer, stopTimer, secondsElapsed };
}
