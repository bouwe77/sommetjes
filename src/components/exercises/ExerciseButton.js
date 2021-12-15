import React from 'react'
import Button from '../shared/Button'
import styles from './ExerciseButton.module.css'

export default function ExerciseButton({ index, children, ...rest }) {
  return (
    <Button
      {...rest}
      className={`${styles['exercise-button']} ${
        styles[`variant-${(index % 5) + 1}`]
      }`}
    >
      {children}
    </Button>
  )
}
