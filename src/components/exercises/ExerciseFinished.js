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
        {results.rewards.map((reward, index) => (
          <span
            key={index}
            role="img"
            aria-label="sushi"
            className="reward-emoji"
          >
            {reward}{" "}
          </span>
        ))}
        <br />
        {[...Array(results.incorrect)].map((_, index) => (
          <span
            key={index}
            role="img"
            aria-label="vies"
            className="reward-emoji"
          >
            💩{" "}
          </span>
        ))}
      </div>
      <br />
    </div>
  );
}
