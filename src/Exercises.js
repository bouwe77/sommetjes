import React from "react";

export default function Exercises({ exercises, selectExercise }) {
  return (
    <div className="exercises">
      {Object.keys(exercises).map((exerciseName, index) => (
        <span key={exerciseName}>
          <button
            onClick={() => selectExercise(exerciseName)}
            className={`exercise-button variant-${(index % 5) + 1}`}
          >
            {exerciseName}
          </button>
          {(index + 1) % 3 === 0 && <br />}
        </span>
      ))}
    </div>
  );
}
