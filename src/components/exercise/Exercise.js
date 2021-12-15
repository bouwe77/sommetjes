import React, { useEffect, useState } from 'react'
import useInterval from '../shared/useInterval'
import useLocalStorage from '../shared/useLocalStorage'
import Question from '../questions-numberpad/Question'
import ExerciseFinished from './ExerciseFinished'
import useTimer from '../shared/useTimer'
import CorrectOrIncorrect from '../shared/CorrectOrIncorrect'
import styles from './Exercise.module.css'
import LinkButton from '../shared/LinkButton'
import { useQuestion } from './useQuestion'
import { useResults } from './useResults'

export default function Exercise({ exerciseId, howManyQuestions, quit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage(
    'currentExerciseIndex',
    0,
  )

  const indexNr = Number(currentQuestionIndex)

  const question = useQuestion(exerciseId, howManyQuestions, indexNr)
  const { results, resetResults, updateResults } = useResults(howManyQuestions)

  const [answerResultTimeout, setAnswerResultTimeout] = useState(null)
  const [exerciseFinished, setExerciseFinished] = useState(false)
  const [answerStatus, setAnswerStatus] = useState(null)

  const { secondsElapsed, resetTimer, stopTimer } = useTimer()

  const canGoNext = indexNr < howManyQuestions - 1
  const goToNext = () => setCurrentQuestionIndex(indexNr + 1)

  useEffect(() => {
    resetResults(howManyQuestions)
    setCurrentQuestionIndex(0)
  }, [exerciseId, howManyQuestions, setCurrentQuestionIndex, resetResults])

  useEffect(() => {
    if (exerciseFinished) stopTimer()
  }, [exerciseFinished, stopTimer])

  useEffect(() => {
    resetTimer()
  }, [indexNr, resetTimer])

  useInterval(() => {
    setAnswerStatus(null)
    setAnswerResultTimeout(null)

    if (canGoNext) {
      goToNext()
    } else {
      setExerciseFinished(true)
    }
  }, answerResultTimeout)

  function reportCorrectOrIncorrect(isCorrect) {
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect')

    updateResults(isCorrect, secondsElapsed)
    setAnswerResultTimeout(500)
  }

  function tryAgain() {
    setExerciseFinished(false)
    setCurrentQuestionIndex(0)
    resetResults(howManyQuestions)
  }

  if (exerciseFinished) {
    return (
      <div>
        <ExerciseFinished results={results} />

        <div className={styles['exercise-footer']}>
          <LinkButton className={styles['space-right']} onClick={tryAgain}>
            Deze oefening opnieuw
          </LinkButton>
          <LinkButton onClick={quit}>Andere oefening kiezen</LinkButton>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['exercise']}>
      {answerStatus && (
        <CorrectOrIncorrect isCorrect={answerStatus === 'correct'} />
      )}
      <div className={styles['progress']}>
        {question && (
          <>
            som {question.nr} van {howManyQuestions}
          </>
        )}
      </div>
      <Question
        question={question}
        reportCorrectOrIncorrect={reportCorrectOrIncorrect}
      />
      <div className={styles['exercise-footer']}>
        <LinkButton onClick={quit}>Andere oefening kiezen</LinkButton>
      </div>
    </div>
  )
}
