import React from "react";
import { exerciseTypes } from "./data";

export default function Exercises({ exercises, selectExercise }) {
  return (
    <div>
      {exerciseTypes.map((exerciseType) => (
        <>
          <h3>{exerciseType}</h3>
          <div className="exercises">
            {exercises
              .filter((x) => x.type === exerciseType)
              .map((exercise, index) => (
                <span key={exercise.name}>
                  <button
                    onClick={() => selectExercise(exercise.name)}
                    className={`exercise-button variant-${(index % 5) + 1}`}
                  >
                    {exercise.name}
                  </button>
                  {(index + 1) % 3 === 0 && <br />}
                </span>
              ))}
          </div>
        </>
      ))}
    </div>
  );
}
