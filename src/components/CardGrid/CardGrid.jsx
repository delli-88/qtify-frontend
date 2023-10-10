import React, { useEffect, useState } from 'react'
import styles from './CardGrid.module.css'
import Card from '../Card/Card'
import axios from 'axios'

const CardGrid = ({albumType}) => {

    const [songsList, setSongsList] = useState([])


    useEffect(()=>{
        fetchSongs(albumType)
        // eslint-disable-next-line
    },[])

    const fetchSongs = async(albumType) =>{
        const songsListApi = await axios.get(`https://qtify-backend-labs.crio.do/albums/${albumType}`)  
        const songsRequired = songsListApi.data.slice(0,6)
        // console.log({songsRequired})
        setSongsList([...songsRequired])
    }

    const CardsGrid = () => {
        const grid = songsList.map((song)=>{
            return <Card cardImage={song.image} followers={song.follows} title={song.title} key={song.id}/>
        })
        // console.log({grid})
        return grid
    }

    return (

        <div className={styles.CardGridContainer}>
            <div className={styles.albumType}>
                <p className={styles.albumTypeText}>{albumType} Albums</p>
                <button className={styles.albumTypeButton}>Show all</button>
            </div>
            <div className={styles.CardGrid}>
                <CardsGrid />
            </div>
        </div>
    )
}

export default CardGrid