import React, { useEffect, useState } from "react";
import Exercise from "./Exercise";
import Exercises from "./Exercises";

import { exercises } from "./data";

function App() {
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!selectedExerciseId) return;
    const questions = exercises
      .find((x) => x.id === selectedExerciseId)
      .getQuestions();
    setQuestions(questions);
  }, [selectedExerciseId]);

  function selectExercise(id) {
    setSelectedExerciseId(id);
  }

  function deselectExercise() {
    setSelectedExerciseId(null);
  }

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Sommetjes</div>
        <div className="nav">
          {/*
          <button className="button-as-link">inloggen</button>
        */}
        </div>
      </header>

      {selectedExerciseId && questions.length > 0 ? (
        <Exercise
          name={selectedExerciseId}
          questions={questions}
          quit={deselectExercise}
        />
      ) : (
        <Exercises exercises={exercises} selectExercise={selectExercise} />
      )}

      <footer>
        <hr />
        <span className="footer-text">
          gemaakt door <a href="https://twitter.com/bouwe">Bouwe</a>{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>
        </span>
      </footer>
    </div>
  );
}

export default App;
