import React, { useEffect, useState } from "react";
import { getQuestions } from "./data";
import Exercise from "./Exercise";
import Exercises from "./Exercises";

function App() {
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetch() {
      const questions = await getQuestions(selectedExerciseId);
      setQuestions(questions);
    }
    if (!selectedExerciseId) return;
    fetch();
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
        <Exercises selectExercise={selectExercise} />
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
