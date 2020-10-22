import React from "react";

export default function CorrectOrIncorrect({ isCorrect }) {
  return <h1>{isCorrect ? "YESSS!!!" : "Oops..."}</h1>;
}
