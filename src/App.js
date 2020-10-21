import React, { useState } from "react";
import AnswerResult from "./AnswerResult";
import NumberPad from "./NumberPad";

const exercises = {
  "Exercise 1": [
    { question: "1 + 1", answer: "2" },
    { question: "1 + 2", answer: "3" },
    { question: "3 + 2", answer: "5" },
  ],
  "Exercise 2": [
    { question: "12 + 10", answer: "22" },
    { question: "32 + 10", answer: "42" },
    { question: "72 + 10", answer: "82" },
  ],
  "Exercise 3": [
    { question: "12 - 1", answer: "11" },
    { question: "9 - 6", answer: "3" },
    { question: "18 - 3", answer: "15" },
  ],
};

function App() {
  const [selectedExerciseName, setSelectedExerciseName] = useState(null);

  function selectExercise(name) {
    setSelectedExerciseName(name);
  }

  function unselectExercise() {
    setSelectedExerciseName(null);
  }

  return (
    <>
      {selectedExerciseName ? (
        <Exercise
          name={selectedExerciseName}
          assignments={exercises[selectedExerciseName]}
          back={unselectExercise}
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

function Exercise({ name, assignments, back }) {
  const [currentAssignmentIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentAssignment = assignments[currentAssignmentIndex];

  function submitAnswer() {
    setAnswered(true);
    console.log(answer, currentAssignment.answer);
    const isCorrect = answer === currentAssignment.answer;
    setIsCorrect(isCorrect);
  }

  return (
    <div>
      <h1>{name}</h1>

      <div>{currentAssignment.question}</div>

      <div style={{ height: "200px", width: "200px", backgroundColor: "Pink" }}>
        <h1>{answer}</h1>
      </div>

      {answered && <AnswerResult isCorrect={isCorrect} />}

      <NumberPad setNumber={setAnswer} />

      <div>
        <button onClick={submitAnswer}>OK</button>
      </div>

      <div>
        <button onClick={back}>Back</button>
      </div>
    </div>
  );
}

function Exercises({ children }) {
  return <div>{children}</div>;
}

export default App;
