import React, { useState } from "react";
import Exercise from "../exercises/Exercise";
import Exercises from "../exercises/Exercises";
import Settings from "../settings/Settings";
import useSettings from "../settings/useSettings";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  const { settings, saveHowManyQuestions } = useSettings();

  function selectExercise(id) {
    setSelectedExerciseId(id);
  }

  function deselectExercise() {
    setSelectedExerciseId(null);
  }

  return (
    <div className="container">
      <Header>
        {!selectedExerciseId && (
          <Settings
            howManyQuestions={settings.howManyQuestions}
            saveHowManyQuestions={saveHowManyQuestions}
          />
        )}
      </Header>

      {selectedExerciseId ? (
        <Exercise
          exerciseId={selectedExerciseId}
          howManyQuestions={settings.howManyQuestions}
          quit={deselectExercise}
        />
      ) : (
        <Exercises selectExercise={selectExercise} />
      )}

      <Footer />
    </div>
  );
}

export default App;
