import React from "react";

export default function ExerciseFinished({ results }) {
  return (
    <div className="results">
      <h1>Goed gedaan!</h1>
      <br />
      <br />
      <h2>
        {results.correct} van de {results.total} goed! 🎉
      </h2>
      <br />
    </div>
  );
}
