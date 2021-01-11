import React, { useEffect, useState } from "react";
import useInterval from "../shared/useInterval";
import useLocalStorage from "../shared/useLocalStorage";
import Question from "../questions-numberpad/Question";
import ExerciseFinished from "./ExerciseFinished";
import Button from "../shared/Button";
import { getQuestions } from "../../data";
import useTimer from "../shared/useTimer";
import useReward from "../shared/useReward";

function getInitialResultsState(questions) {
  return {
    correct: 0,
    incorrect: 0,
    rewards: [],
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

  const { secondsElapsed, resetTimer, stopTimer } = useTimer();
  const reward = useReward(secondsElapsed);
  const indexNr = Number(currentQuestionIndex);
  const canGoNext = indexNr < questions.length - 1;
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
    if (finished) stopTimer();
  }, [finished, stopTimer]);

  useEffect(() => {
    resetTimer();
  }, [currentQuestionIndex, resetTimer]);

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
      if (reward) updatedResults.rewards = [...results.rewards, reward];
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
            som {indexNr + 1} van {questions.length}
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
