import { useCallback, useState } from "react";
import useInterval from "./useInterval";

export default function useBonusPoints(points, timeLimitInSeconds) {
  const [bonusPoints, setBonusPoints] = useState(points);
  const [counter, setCounter] = useState(timeLimitInSeconds);

  useInterval(() => {
    if (bonusPoints === 0) return;
    if (counter > 0) {
      const updatedCounter = counter - 1;
      setCounter(updatedCounter);
    } else {
      setBonusPoints(0);
    }
  }, 1000);

  const reset = useCallback(() => {
    setCounter(timeLimitInSeconds);
    setBonusPoints(points);
  }, [timeLimitInSeconds, points]);

  return [bonusPoints, reset];
}
