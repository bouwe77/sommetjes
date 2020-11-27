import React from "react";

export default function ExerciseFinished({ results }) {
  return (
    <div className="results">
      {results.correct > 0 ? "Goed gedaan!" : "Klaar!"}
      <br />
      <br />
      <h1>
        {results.correct} van de {results.total} goed!{" "}
        {results.correct > 0 ? (
          <span role="img" aria-label="yes!!!">
            🎉
          </span>
        ) : (
          <span role="img" aria-label="sad">
            😕
          </span>
        )}
      </h1>
      <div>
        <br />
        <b>Dit heb je allemaal gewonnen:</b>
        <br />
        {[...Array(results.bonus1)].map((_, index) => (
          <span
            key={index}
            role="img"
            aria-label="sushi"
            className="bonus-emoji"
          >
            🍱{" "}
          </span>
        ))}
        <br />
        {[...Array(results.bonus2)].map((_, index) => (
          <span
            key={index}
            role="img"
            aria-label="sushi"
            className="bonus-emoji"
          >
            🍦{" "}
          </span>
        ))}
        <br />
        {[...Array(results.incorrect)].map((_, index) => (
          <span
            key={index}
            role="img"
            aria-label="vies"
            className="bonus-emoji"
          >
            💩{" "}
          </span>
        ))}
      </div>
      <br />
    </div>
  );
}
