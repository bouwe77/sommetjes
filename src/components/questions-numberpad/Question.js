import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import NumberPad from "./NumberPad";
import useNumberConcatenater from "./useNumberConcatenater";

export default function Question({ question, reportCorrectOrIncorrect }) {
  const [answer, setAnswer] = useState(null);
  const { concatenateNumber, clearNumber } = useNumberConcatenater(setAnswer);

  useEffect(() => {
    setAnswer(null);
    clearNumber();
  }, [question, clearNumber]);

  function submitAnswer() {
    const isCorrect = answer === question.answer;
    reportCorrectOrIncorrect(isCorrect);
  }

  if (!question) return null;

  return (
    <>
      <div className="question">{question.question} =</div>

      <div className="answer">{answer}</div>

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
