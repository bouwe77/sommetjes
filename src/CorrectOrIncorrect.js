import React from "react";
import Modal from "./Modal";

export default function CorrectOrIncorrect({ isCorrect }) {
  return (
    <Modal>
      <div className="correct-incorrect">{isCorrect ? <>✅</> : <>❌</>}</div>
    </Modal>
  );
}
