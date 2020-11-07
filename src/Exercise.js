import React, { useEffect, useState } from "react";
import useInterval from "./hooks/useInterval";
import useLocalStorage from "./hooks/useLocalStorage";
import Question from "./Question";
import ExerciseFinished from "./ExerciseFinished";
import useBonusPoints from "./hooks/useBonusPoints";

export default function Exercise({ name, questions, quit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage(
    "currentExerciseIndex",
    0
  );
  const [answerResultTimeout, setAnswerResultTimeout] = useState(null);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState({
    correct: 0,
    incorrect: 0,
    bonus1: 0,
    bonus2: 0,
    total: questions.length,
  });
  const [bonus5Seconds, resetBonus5Seconds] = useBonusPoints(1, 5);
  const [bonus10Seconds, resetBonus10Seconds] = useBonusPoints(1, 10);

  const indexNr = Number(currentQuestionIndex);
  const canGoNext = indexNr < questions.length - 1;
  const goToNext = () => setCurrentQuestionIndex(indexNr + 1);

  //TODO Heb ik niet teveel useEffects?

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [setCurrentQuestionIndex, name]);

  useEffect(() => {
    resetBonus5Seconds();
    resetBonus10Seconds();
  }, [currentQuestionIndex, resetBonus5Seconds, resetBonus10Seconds]);

  useInterval(() => {
    if (canGoNext) {
      goToNext();
    } else {
      setFinished(true);
    }

    setAnswerResultTimeout(null);
  }, answerResultTimeout);

  function answerGiven(isCorrect) {
    const updatedResults = { ...results };

    if (isCorrect) {
      updatedResults.bonus1 = results.bonus1 + bonus5Seconds;
      updatedResults.bonus2 = results.bonus2 + bonus10Seconds;
      updatedResults.correct = results.correct + 1;
    } else updatedResults.incorrect = results.incorrect + 1;

    setResults(updatedResults);

    setAnswerResultTimeout(500);
  }

  function tryAgain() {
    setFinished(false);
    setCurrentQuestionIndex(0);
    setResults({
      correct: 0,
      incorrect: 0,
      bonus1: 0,
      bonus2: 0,
      total: questions.length,
    });
  }

  return (
    <div>
      {/*
      <div className="exercise-title">
        <h1>{name}</h1>
      </div>
    */}

      {finished ? (
        <div>
          <ExerciseFinished results={results} />

          <div className="exercise-footer">
            <button className="button-as-link" onClick={tryAgain}>
              Deze oefening opnieuw
            </button>
            <button className="button-as-link" onClick={quit}>
              Andere oefening kiezen
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Question
            question={questions[currentQuestionIndex]}
            answerGiven={answerGiven}
          />
          <div className="exercise-footer">
            <button className="button-as-link" onClick={quit}>
              Andere oefening kiezen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
