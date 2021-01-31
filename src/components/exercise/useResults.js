import { useCallback, useState } from "react";

export function useResults(howManyQuestions) {
  const [results, setResults] = useState();

  function updateResults(isCorrect, secondsElapsed) {
    const updatedResults = isCorrect
      ? updateResultsForCorrectAnswer(secondsElapsed)
      : updateResultsForIncorrectAnswer();

    setResults(updatedResults);
  }

  function updateResultsForCorrectAnswer(secondsElapsed) {
    const updatedResults = { ...results };

    updatedResults.correct++;
    if (secondsElapsed < 4) updatedResults.gold++;
    else if (secondsElapsed < 10) updatedResults.silver++;
    else updatedResults.bronze++;

    const updatedDurations = [...updatedResults.durations, secondsElapsed];

    updatedResults.durations = updatedDurations;
    updatedResults.averageDuration =
      updatedDurations.reduce((a, b) => a + b) / updatedDurations.length;

    return updatedResults;
  }

  function updateResultsForIncorrectAnswer() {
    const updatedResults = { ...results };
    updatedResults.incorrect++;
    return updatedResults;
  }

  const resetResults = useCallback(() => {
    const initialResults = {
      correct: 0,
      incorrect: 0,
      total: howManyQuestions,
      gold: 0,
      silver: 0,
      bronze: 0,
      durations: [],
      averageDuration: 0,
    };
    setResults(initialResults);
  }, [howManyQuestions]);

  return { results, resetResults, updateResults };
}
