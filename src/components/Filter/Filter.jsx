import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { fetchGenres, fetchSongs } from '../../api/api';
import styles from './Filter.module.css'
import Section from '../Section/Section';


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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

  const filterSongs = (filterKey) => {
    const filteredSongs = songs.filter((song)=>song.genre.key===filterKey)
    return filterSongs
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // const newFilterSongs = filterSongs(event.target.value)
    // console.log(genres[newValue-1].key)
    // // setSongs(newFilterSongs)
    // console.log(event.target.label)
  };

  return (
    <Box className={styles.songsContainer} sx={{ width: '100%' }}>
        <h3>Songs</h3>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="songs tabs" textColor= "white" indicatorColor="primary">
          <Tab label="All" {...a11yProps(0)}/>
          {genres.map((genre, idx)=>(
            <Tab label={genre.label} {...a11yProps(idx + 1)} />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Section data={songs} type="song"/>
      </CustomTabPanel>
      {
        genres.map((genre, idx)=>(
            <CustomTabPanel value={value} index={idx + 1}>
                {`Item ${idx + 1} ${genre.key}`}
            </CustomTabPanel>
        ))
      }
    </Box>
  );
}
