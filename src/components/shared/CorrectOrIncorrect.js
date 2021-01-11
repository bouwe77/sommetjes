import React from "react";
import Modal from "./Modal";

export default function CorrectOrIncorrect({ isCorrect }) {
  return (
    <Modal>
      {isCorrect ? (
        <div className="correct">Correct!</div>
      ) : (
        <div className="incorrect">Helaas...</div>
      )}
    </Modal>
  );
}
