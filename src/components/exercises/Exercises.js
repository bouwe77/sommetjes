import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import { exerciseTypes, getExercises } from "../../data";

export default function Exercises({ selectExercise }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetch() {
      const exercises = await getExercises();
      setExercises(exercises);
    }
    fetch();
  }, []);

  return (
    <div>
      {exerciseTypes.map((exerciseType) => (
        <div key={exerciseType}>
          <h3>{exerciseType}</h3>
          {
            <div className="exercises">
              {exercises
                .filter((x) => x.type === exerciseType)
                .map((exercise, index) => (
                  <span key={exercise.id}>
                    <Button
                      onClick={() => selectExercise(exercise.id)}
                      className={`exercise-button variant-${(index % 5) + 1}`}
                    >
                      {exercise.name}
                    </Button>
                  </span>
                ))}
            </div>
          }
        </div>
      ))}
    </div>
  );
}
