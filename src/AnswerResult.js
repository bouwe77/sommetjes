import React from "react";

export default function AnswerResult({ isCorrect }) {
  return <h1>{isCorrect ? "YESSS!!!" : "Oops..."}</h1>;
}
