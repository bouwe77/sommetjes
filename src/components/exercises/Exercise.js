import React, { useEffect, useState } from "react";
import useInterval from "../shared/useInterval";
import useLocalStorage from "../shared/useLocalStorage";
import Question from "../questions-numberpad/Question";
import ExerciseFinished from "./ExerciseFinished";
import Button from "../shared/Button";
import { getQuestions } from "../../data";
import useTimer from "../shared/useTimer";
import useReward from "../shared/useReward";
import CorrectOrIncorrect from "../shared/CorrectOrIncorrect";

function getInitialResultsState(howManyQuestions) {
  return {
    correct: 0,
    incorrect: 0,
    rewards: [],
    total: howManyQuestions,
  };
}

function useQuestion(exerciseId, howManyQuestions, indexNr) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetch() {
      const questions = await getQuestions(exerciseId, howManyQuestions);
      let index = 1;
      const questionsWithIndexNr = questions.map((q) => {
        return { ...q, nr: index++ };
      });
      setQuestions(questionsWithIndexNr);
    }
    fetch();
  }, [exerciseId, howManyQuestions]);

  return questions[indexNr];
}

export default function Exercise({ exerciseId, howManyQuestions, quit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage(
    "currentExerciseIndex",
    0
  );
  const indexNr = Number(currentQuestionIndex);

  const question = useQuestion(exerciseId, howManyQuestions, indexNr);

  const [answerResultTimeout, setAnswerResultTimeout] = useState(null);
  const [exerciseFinished, setExerciseFinished] = useState(false);
  const [results, setResults] = useState();
  const [answerStatus, setAnswerStatus] = useState(null);

  const { secondsElapsed, resetTimer, stopTimer } = useTimer();
  const reward = useReward(secondsElapsed);

  const canGoNext = indexNr < howManyQuestions - 1;
  const goToNext = () => setCurrentQuestionIndex(indexNr + 1);

  useEffect(() => {
    setResults(getInitialResultsState(howManyQuestions));
    setCurrentQuestionIndex(0);
  }, [exerciseId, howManyQuestions, setCurrentQuestionIndex]);

  useEffect(() => {
    if (exerciseFinished) stopTimer();
  }, [exerciseFinished, stopTimer]);

  useEffect(() => {
    resetTimer();
  }, [indexNr, resetTimer]);

  useInterval(() => {
    setAnswerStatus(null);
    setAnswerResultTimeout(null);

    if (canGoNext) {
      goToNext();
    } else {
      setExerciseFinished(true);
    }
  }, answerResultTimeout);

  function reportCorrectOrIncorrect(isCorrect) {
    setAnswerStatus(isCorrect ? "correct" : "incorrect");

    const updatedResults = { ...results };

    if (isCorrect) {
      if (reward) updatedResults.rewards = [...results.rewards, reward];
      updatedResults.correct = results.correct + 1;
    } else updatedResults.incorrect = results.incorrect + 1;

    setResults(updatedResults);

    setAnswerResultTimeout(500);
  }

  function tryAgain() {
    setExerciseFinished(false);
    setCurrentQuestionIndex(0);
    setResults(getInitialResultsState(howManyQuestions));
  }

  return (
    <>
      {exerciseFinished ? (
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
        <>
          {answerStatus && (
            <CorrectOrIncorrect isCorrect={answerStatus === "correct"} />
          )}
          <div>
            <div style={{ textAlign: "center" }}>
              {question && (
                <>
                  som {question.nr} van {howManyQuestions}
                </>
              )}
            </div>
            <Question
              question={question}
              reportCorrectOrIncorrect={reportCorrectOrIncorrect}
            />
            <div className="exercise-footer">
              <Button className="button-as-link" onClick={quit}>
                Andere oefening kiezen
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
