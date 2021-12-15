import React, { useEffect, useState } from 'react'
import Button from '../shared/Button'
import NumberPad from './NumberPad'
import useNumberConcatenater from './useNumberConcatenater'
import styles from './Question.module.css'

export default function Question({ question, reportCorrectOrIncorrect }) {
  const [answer, setAnswer] = useState(null)
  const { concatenateNumber, clearNumber } = useNumberConcatenater(setAnswer)

  useEffect(() => {
    setAnswer(null)
    clearNumber()
  }, [question, clearNumber])

  function submitAnswer() {
    const isCorrect = answer === question.answer
    reportCorrectOrIncorrect(isCorrect)
  }

  if (!question) return null

  return (
    <>
      <div className={styles.question}>{question.question} =</div>

      <div className={styles.answer}>{answer}</div>

      <div className={styles['answer-input']}>
        <NumberPad setNumber={concatenateNumber} clear={clearNumber} />

        <div>
          <Button className={styles['ok-button']} onClick={submitAnswer}>
            OK
          </Button>
        </div>
      </div>
    </>
  )
}
