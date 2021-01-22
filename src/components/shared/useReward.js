import { useEffect, useState } from "react";

const rewards = ["🍫", "🍌", "🍦", "🍉", "🍭"];
//const secondsPerReward = 2;

export default function useReward(seconds) {
  const [reward, setReward] = useState(rewards[0]);

  useEffect(() => {
    let index;
    if (seconds < 3) index = 0;
    else if (seconds < 5) index = 1;
    else if (seconds < 7) index = 2;
    else if (seconds < 9) index = 3;
    else if (seconds < 11) index = 4;
    else {
      setReward(null);
      return;
    }

    setReward(rewards[index]);
  }, [seconds, reward]);

  return reward;
}
