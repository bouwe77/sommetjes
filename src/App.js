import React, { useState } from "react";
import Exercise from "./Exercise";
import Exercises from "./Exercises";

import exercises from "./data";

function App() {
  const [selectedExerciseName, setSelectedExerciseName] = useState(null);

  function selectExercise(name) {
    setSelectedExerciseName(name);
  }

  function deselectExercise() {
    setSelectedExerciseName(null);
  }

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Sommetjes</div>
        <div className="nav">
          <button className="button-as-link">inloggen</button>
        </div>
      </header>

      {selectedExerciseName ? (
        <Exercise
          name={selectedExerciseName}
          questions={exercises[selectedExerciseName]}
          quit={deselectExercise}
        />
      ) : (
        <Exercises exercises={exercises} selectExercise={selectExercise} />
      )}

      <footer>
        <hr />
        <span className="footer-text">
          gemaakt door Bouwe{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>
        </span>
      </footer>
    </div>
  );
}

export default App;
