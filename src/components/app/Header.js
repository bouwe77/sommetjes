import React from 'react'
import LinkButton from '../shared/LinkButton'
import styles from './Header.module.css'

export default function Header({ children, goHome }) {
  return (
    <header className={styles.header}>
      <LinkButton className={styles.logo} onClick={goHome}>
        Sommetjes
      </LinkButton>
      <div className={styles.nav}>{children} </div>
    </header>
  )
}
