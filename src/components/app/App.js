import React, { useState } from 'react'
import Exercise from '../exercise/Exercise'
import Exercises from '../exercises/Exercises'
import Settings from '../settings/Settings'
import useSettings from '../settings/useSettings'
import Footer from './Footer'
import Header from './Header'
import styles from './App.module.css'

function App() {
  const [selectedExerciseId, setSelectedExerciseId] = useState(null)
  const { settings, saveHowManyQuestions } = useSettings()

  function selectExercise(id) {
    setSelectedExerciseId(id)
  }

  function deselectExercise() {
    setSelectedExerciseId(null)
  }

  return (
    <div className={styles.container}>
      <Header goHome={deselectExercise}>
        {!selectedExerciseId && (
          <Settings
            howManyQuestions={settings.howManyQuestions}
            saveHowManyQuestions={saveHowManyQuestions}
          />
        )}
      </Header>

      <div className={styles.main}>
        {selectedExerciseId ? (
          <Exercise
            exerciseId={selectedExerciseId}
            howManyQuestions={settings.howManyQuestions}
            quit={deselectExercise}
          />
        ) : (
          <Exercises selectExercise={selectExercise} />
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App
