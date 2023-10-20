import React from 'react'
import styles from './HeroSection.module.css'
import HeroImage from '../../assets/HeroImage.svg' 

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
            <p className={styles.heroText1}>100 Thousand Songs, ad-free</p>
            <p className={styles.heroText2}>Over thousands podcast episodes</p>
        </div>
        <div className={styles.heroImage}>
          <img src={HeroImage} alt="HeroImage" className={styles.heroImage}/>
        </div>
    </div>
  )
}

export default HeroSection