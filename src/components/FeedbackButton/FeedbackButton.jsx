import React from 'react'
import styles from './FeedbackButton.module.css'

const FeedbackButton = ({children}) => {
  return (
    <div className={styles.btn}>{children}</div>
  )
}

export default FeedbackButton