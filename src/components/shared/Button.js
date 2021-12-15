import React from 'react'
import styles from './Button.module.css'

export default function Button({ children, className, ...rest }) {
  const classNames = `${styles.button} ${className}`

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  )
}
