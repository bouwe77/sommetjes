import React, { useEffect, useState } from "react";
import ExerciseButton from "./ExerciseButton";
import { exerciseTypes, getExercises } from "../../data";
import styles from "./Exercises.module.css";

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
    <>
      {exerciseTypes.map((exerciseType) => (
        <div key={exerciseType}>
          <h3>{exerciseType}</h3>
          {
            <div className={styles.exercises}>
              {exercises
                .filter((x) => x.type === exerciseType)
                .map((exercise, index) => (
                  <span key={exercise.id}>
                    <ExerciseButton
                      index={index}
                      onClick={() => selectExercise(exercise.id)}
                    >
                      {exercise.name}
                    </ExerciseButton>
                  </span>
                ))}
            </div>
          }
        </div>
      ))}
    </>
  );
}
