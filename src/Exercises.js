import React from "react";
import { exerciseTypes } from "./data";

export default function Exercises({ exercises, selectExercise }) {
  return (
    <div>
      {exerciseTypes.map((exerciseType) => (
        <div key={exerciseType}>
          <h3>{exerciseType}</h3>
          {
            <div className="exercises">
              {exercises
                //   .filter((x) => x.type === exerciseType)
                .map((exercise, index) => (
                  <span key={exerciseType + exercise.id}>
                    <button
                      onClick={() => selectExercise(exercise.id)}
                      className={`exercise-button variant-${(index % 5) + 1}`}
                    >
                      {exercise.name}
                    </button>
                  </span>
                ))}
            </div>
          }
        </div>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <div key="1">
  //       <h3>Optellen</h3>
  //       <div className="exercises">
  //         <span key="2">
  //           <button
  //             onClick={() => selectExercise("1")}
  //             className={`exercise-button variant-1}`}
  //           >
  //             Onder 10
  //           </button>
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // );
}
