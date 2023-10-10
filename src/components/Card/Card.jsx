import React from 'react'
import styles from './Card.module.css'

const Card = ({cardImage, followers, title}) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardBody}>
            <img src={cardImage} alt="cardImage" className={styles.cardImage}/>
            <p className={styles.cardText}>{followers} Follows</p>
        </div>
        <div>
            <p className={styles.cardTitle}>{title}</p>
        </div>
    </div>
  )
}

export default Card