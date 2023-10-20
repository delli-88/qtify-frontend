import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { fetchGenres, fetchSongs } from '../../api/api';
import styles from './Filter.module.css'
import Section from '../Section/Section';
import { tabIndex } from '../../utils/constants';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{paddingTop:"1rem"}}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [genres, setGenres] = useState([])
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])


  useEffect(()=>{
    generateGenres()
    generateSongs()
  },[])

  const generateGenres = async() => {
    try {
        const genresData = await fetchGenres()
        // console.log({genresData})
        setGenres(genresData)
    } catch (error) {
        console.error(error)
    }
  }

  const generateSongs = async() => {
    try {
        const songsData = await fetchSongs()
        // console.log({songsData})
        setSongs(songsData)
    } catch (error) {
        console.error(error)
    }
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
    const reqGenre = tabIndex[newValue]
    if (reqGenre==="all"){
      setFilteredSongs(songs)
    }else{
      const songsFiltered = filterSongs(reqGenre)
      setFilteredSongs(songsFiltered)
    }
  };

  const filterSongs = (genre) => {
    const songsFiltered = songs.filter((song)=>{
      return song.genre.key===genre
    })
    return songsFiltered
  }

  return (
    <Box className={styles.songsContainer} sx={{ width: '100%'}}>
        <h3>Songs</h3>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
        <Tabs value={value} onChange={handleChange} aria-label="songs tabs" textColor= "inherit" indicatorColor="primary" sx={{padding:"0px", margin:"0px"}}>
          <Tab label="All" {...a11yProps(0)} />
          {genres.map((genre, idx)=>(
            <Tab label={genre.label} {...a11yProps(idx + 1)} key={genre.key}/>
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Section data={songs} type="song"/>
      </CustomTabPanel>
      {
        genres.map((genre, idx)=>(
            <CustomTabPanel value={value} index={idx + 1} key={genre.key}>
                {/* {`Item ${idx + 1} ${genre.key}`} */}
                <Section data={filteredSongs} type="song"/>
            </CustomTabPanel>
        ))
      }
    </Box>
  );
}
