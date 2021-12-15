import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ children, width = '300px' }) => (
  <div className={`${styles.modal} ${styles['display-block']}`}>
    <section className={styles['modal-main']} style={{ width }}>
      {children}
    </section>
  </div>
)

export default Modal
