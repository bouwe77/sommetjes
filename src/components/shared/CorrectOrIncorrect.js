import React from 'react'
import Modal from './Modal'
import styles from './CorrectOrIncorrect.module.css'

export default function CorrectOrIncorrect({ isCorrect }) {
  return (
    <Modal>
      {isCorrect ? (
        <div className={styles['correct']}>Correct!</div>
      ) : (
        <div className={styles['incorrect']}>Helaas...</div>
      )}
    </Modal>
  )
}
