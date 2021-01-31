import React from "react";
import EmojiRepeater from "./EmojiRepeater";
import styles from "./ExerciseFinished.module.css";

export default function ExerciseFinished({ results }) {
  return (
    <div className={styles["results"]}>
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

      <br />
      <br />

      <div>
        {results.gold > 0 && (
          <div>
            Aantal vragen binnen 4 seconden goed:
            <EmojiRepeater emoji="🥇" howMany={results.gold} />
          </div>
        )}
        {results.silver > 0 && (
          <div>
            Aantal vragen binnen 10 seconden goed:
            <EmojiRepeater emoji="🥈" howMany={results.silver} />
          </div>
        )}
        {results.bronze > 0 && (
          <div>
            Overig aantal vragen goed:
            <EmojiRepeater emoji="🥉" howMany={results.bronze} />
          </div>
        )}
        {results.incorrect > 0 && (
          <div>
            Aantal vragen fout:
            <EmojiRepeater emoji="💩" howMany={results.incorrect} />
          </div>
        )}
      </div>
    </div>
  );
}
