import React from 'react'
import { useState } from 'react'
import styles from './Section.module.css'
import { CircularProgress } from '@mui/material'
import MusicCard from '../MusicCard/MusicCard'
import Carousel from '../Carousel/Carousel'

const Section = ({title, data, type}) => {
    const [carouselToggle, setCarouselToggle] = useState(true)
    const handleCarousel = () =>{
        setCarouselToggle(!carouselToggle)
    }
    return (
        <div className={styles.carouselWrapper}>
            {type==="album" &&
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleCarousel}>
                    {carouselToggle?"Show All":"Collapse All"}
                </h4>
            </div>
            }

            {data.length === 0 ?(
                <CircularProgress/>
                ):(
                    <div className={styles.cardWrapper}>
                        {
                            !carouselToggle?(
                                <div className={styles.wrapper}>
                                    {data.map((item)=>(
                                        
                                        <MusicCard data={item} type={type} key={item.id}/>
                                    ))
                                    }
                                </div>
                            ):(
                                <Carousel data={data} renderComponent={(data)=><MusicCard data={data} type={type} key={data.id}/> }/>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Section