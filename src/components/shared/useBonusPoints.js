// import { useCallback, useEffect, useState } from "react";
// import useInterval from "./useInterval";

// const bonuses = ["🍫", "🍌", "🍦", "🍉", "🍭"];
// const initialBonusIndex = bonuses.length - 1;
// const initialTimeout = 3000;
// const subsequentTimeout = 2000;

// export default function useBonusPoints() {
//   const [timeout, setTimeout] = useState(null);
//   const [bonusIndex, setBonusIndex] = useState(initialBonusIndex);
//   const bonus = bonusIndex >= 0 ? bonuses[bonusIndex] : null;

//   //TODO Nu is het probleem dat als ik de 2e vraag te snel antwoord de boel nog niet gereset is?
//   //Idee: een hook die bepaalt hoe snel je was in seconden
//   //en dan daarnaast een ander ding dat dan de bonus bepaalt?

//   // Do not start the interval before the component rendered.
//   useEffect(() => {
//     if (bonusIndex === initialBonusIndex) setTimeout(initialTimeout);
//   }, [bonusIndex]);

//   //=== deze kan weg =====
//   useEffect(() => {
//     console.log({ bonusIndex });
//     console.log({ bonus });
//   }, [bonusIndex, bonus]);
//   //======================

//   useInterval(() => {
//     console.log({ bonusIndex });
//     const newBonusIndex = bonusIndex - 1;
//     setBonusIndex(newBonusIndex);
//     if (newBonusIndex > 0) setTimeout(subsequentTimeout);
//     else setTimeout(null);
//   }, timeout);

//   const resetBonus = useCallback(() => {
//     setBonusIndex(initialBonusIndex);
//   }, []);

//   return { bonus, resetBonus };
// }
