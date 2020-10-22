import React, { useEffect, useState } from "react";
import useInterval from "./hooks/useInterval";
import useLocalStorage from "./hooks/useLocalStorage";
import Question from "./Question";

export default function Exercise({ name, questions, quit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage(
    "currentExerciseIndex",
    0
  );
  const [timeout, setTimeout] = useState(null);
  const [finished, setFinished] = useState(false);

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

  function answerResult(isCorrect) {
    setTimeout(1000);
  }

  function tryAgain() {
    setFinished(false);
    setCurrentQuestionIndex(0);
  }

  return (
    <div>
      <div className="exercise-title">
        <h1>{name}</h1>
      </div>

      {finished ? (
        <div>
          <div>OK, klaar...</div>
          <button onClick={tryAgain}>Deze oefening opnieuw</button>
          <button onClick={quit}>Andere oefening kiezen</button>
        </div>
      ) : (
        <div>
          <Question
            question={questions[currentQuestionIndex]}
            answerResult={answerResult}
          />
          <button onClick={quit}>Andere oefening kiezen</button>
        </div>
      )}
    </div>
  );
}
