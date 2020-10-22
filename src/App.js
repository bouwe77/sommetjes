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
    <>
      {selectedExerciseName ? (
        <Exercise
          name={selectedExerciseName}
          questions={exercises[selectedExerciseName]}
          quit={deselectExercise}
        />
      ) : (
        <Exercises>
          {Object.keys(exercises).map((exerciseName) => (
            <div key={exerciseName}>
              <button onClick={() => selectExercise(exerciseName)}>
                {exerciseName}
              </button>
            </div>
          ))}
        </Exercises>
      )}
    </>
  );
}

export default App;
