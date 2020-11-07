import React from "react";
import { exerciseTypes } from "./data";

export default function Exercises({ exercises, selectExercise }) {
  return (
    <div>
      {exerciseTypes.map((exerciseType) => (
        <div key={exerciseType}>
          <h3>{exerciseType}</h3>
          <div className="exercises">
            {exercises
              .filter((x) => x.type === exerciseType)
              .map((exercise, index) => (
                <span key={exercise.id}>
                  <button
                    onClick={() => selectExercise(exercise.id)}
                    className={`exercise-button variant-${(index % 5) + 1}`}
                  >
                    {exercise.name}
                  </button>
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
