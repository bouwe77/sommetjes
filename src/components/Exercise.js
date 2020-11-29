import React, { useEffect, useState } from "react";
import useInterval from "./shared/useInterval";
import useLocalStorage from "./shared/useLocalStorage";
import Question from "./Question";
import ExerciseFinished from "./ExerciseFinished";
import useBonusPoints from "./useBonusPoints";
import Button from "./shared/Button";
import { getQuestions } from "../data";

function getInitialResultsState(questions) {
  return {
    correct: 0,
    incorrect: 0,
    bonus1: 0,
    bonus2: 0,
    total: questions.length,
  };
}

export default function Exercise({ exerciseId, howManyQuestions, quit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage(
    "currentExerciseIndex",
    0
  );
  const [questions, setQuestions] = useState([]);
  const [answerResultTimeout, setAnswerResultTimeout] = useState(null);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState();
  const [bonus5Seconds, resetBonus5Seconds] = useBonusPoints(1, 5);
  const [bonus10Seconds, resetBonus10Seconds] = useBonusPoints(1, 10);

  const indexNr = Number(currentQuestionIndex);
  const canGoNext = indexNr < questions.length - 1;
  console.log(canGoNext);
  const goToNext = () => setCurrentQuestionIndex(indexNr + 1);

  useEffect(() => {
    async function fetch() {
      const questions = await getQuestions(exerciseId, howManyQuestions);
      setQuestions(questions);
      setResults(getInitialResultsState(questions));
    }
    fetch();
    setCurrentQuestionIndex(0);
  }, [exerciseId, howManyQuestions, setCurrentQuestionIndex]);

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
    setResults(getInitialResultsState(questions));
  }

  return (
    <>
      {finished ? (
        <div>
          <ExerciseFinished results={results} />

          <div className="exercise-footer">
            <Button className="button-as-link" onClick={tryAgain}>
              Deze oefening opnieuw
            </Button>
            <Button className="button-as-link" onClick={quit}>
              Andere oefening kiezen
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ textAlign: "center" }}>
            som {Number(currentQuestionIndex) + 1} van {questions.length}
          </div>
          <Question
            question={questions[currentQuestionIndex]}
            answerGiven={answerGiven}
          />
          <div className="exercise-footer">
            <Button className="button-as-link" onClick={quit}>
              Andere oefening kiezen
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
