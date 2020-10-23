import React, { useEffect, useState } from "react";
import CorrectOrIncorrect from "./CorrectOrIncorrect";
import NumberPad, { useNumberConcatenater } from "./NumberPad";

export default function Question({ question, answerGiven }) {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answer, setAnswer] = useState(null);
  const { concatenateNumber, clearNumber } = useNumberConcatenater(setAnswer);

  useEffect(() => {
    setAnswered(false);
    setIsCorrect(false);
    setAnswer(null);
    clearNumber();
  }, [question, clearNumber]);

  function submitAnswer() {
    setAnswered(true);
    const isCorrect = answer === question.answer;
    setIsCorrect(isCorrect);
    answerGiven(isCorrect);
  }

  return (
    <>
      <div className="question">
        <h1>{question.question} =</h1>
      </div>

      <div className="answer">
        <h1>{answer}</h1>
      </div>

      {answered && <CorrectOrIncorrect isCorrect={isCorrect} />}

      <div className="answer-input">
        <NumberPad setNumber={concatenateNumber} clear={clearNumber} />

        <div>
          <button className="ok-button" onClick={submitAnswer}>
            OK
          </button>
        </div>
      </div>
    </>
  );
}
