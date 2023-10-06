import React from 'react'
import styles from './Search.module.css'
// import SearchImage from '../../assets/SearchImage.svg'
import { ReactComponent as SearchImage} from '../../assets/SearchImage.svg'
const Search = ({placeholder}) => {
  return (
    <form className={styles.formWrapper}>
        <input className={styles.search} placeholder={placeholder}/>
        <button className={styles.searchButton}>
            {/* <img src={SearchImage} alt="searchImg" /> */}
            <SearchImage />
        </button>
    </form>
  )
}

export default Search