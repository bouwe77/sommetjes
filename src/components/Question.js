import React, { useEffect, useState } from "react";
import Button from "./shared/Button";
import CorrectOrIncorrect from "./CorrectOrIncorrect";
import NumberPad from "./numbers/NumberPad";
import useNumberConcatenater from "./numbers/useNumberConcatenater";

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

  if (!question) return null;

  return (
    <>
      <div className="question">{question.question} =</div>

      <div className="answer">{answer}</div>

      {answered && <CorrectOrIncorrect isCorrect={isCorrect} />}

      <div className="answer-input">
        <NumberPad setNumber={concatenateNumber} clear={clearNumber} />

        <div>
          <Button className="ok-button" onClick={submitAnswer}>
            OK
          </Button>
        </div>
      </div>
    </>
  );
}
