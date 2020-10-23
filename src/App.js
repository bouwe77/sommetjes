import React, { useEffect, useState } from "react";
import Exercise from "./Exercise";
import Exercises from "./Exercises";

import exercises from "./data";

function App() {
  const [selectedExerciseName, setSelectedExerciseName] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!selectedExerciseName) return;
    const questions = exercises[selectedExerciseName].getQuestions();
    setQuestions(questions);
  }, [selectedExerciseName]);

  function selectExercise(name) {
    setSelectedExerciseName(name);
  }

  function deselectExercise() {
    setSelectedExerciseName(null);
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

      {selectedExerciseName && questions.length > 0 ? (
        <Exercise
          name={selectedExerciseName}
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
