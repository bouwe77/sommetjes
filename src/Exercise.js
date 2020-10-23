import React, { useEffect, useState } from "react";
import useInterval from "./hooks/useInterval";
import useLocalStorage from "./hooks/useLocalStorage";
import Question from "./Question";
import ExerciseFinished from "./ExerciseFinished";

export default function Exercise({ name, questions, quit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage(
    "currentExerciseIndex",
    0
  );
  const [timeout, setTimeout] = useState(null);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState({
    correct: 0,
    incorrect: 0,
    total: questions.length,
  });

  const indexNr = Number(currentQuestionIndex);
  const canGoNext = indexNr < questions.length - 1;
  const goToNext = () => setCurrentQuestionIndex(indexNr + 1);

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [setCurrentQuestionIndex, name]);

  useInterval(() => {
    if (canGoNext) {
      goToNext();
    } else {
      setFinished(true);
    }

    setTimeout(null);
  }, timeout);

  function answerGiven(isCorrect) {
    const updatedResults = isCorrect
      ? { ...results, correct: results.correct + 1 }
      : { ...results, incorrect: results.incorrect + 1 };
    setResults(updatedResults);
    setTimeout(600);
  }

  function tryAgain() {
    setFinished(false);
    setCurrentQuestionIndex(0);
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
            <button className="exercise-footer-button" onClick={tryAgain}>
              Deze oefening opnieuw
            </button>
            <button className="exercise-footer-button" onClick={quit}>
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
            <button className="exercise-footer-button" onClick={quit}>
              Andere oefening kiezen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
