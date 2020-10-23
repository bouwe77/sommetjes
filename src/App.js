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
      {selectedExerciseName ? (
        <Exercise
          name={selectedExerciseName}
          questions={exercises[selectedExerciseName]}
          quit={deselectExercise}
        />
      ) : (
        <Exercises exercises={exercises} selectExercise={selectExercise} />
      )}
    </div>
  );
}

export default App;
