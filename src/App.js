import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';
import Section from './components/Section/Section';
import SongTabs from './components/Filter/Filter';
import FaqAccordion from './components/FaqAccordion/FaqAccordion';

function App() {

  const [topAlbumsData, setTopAlbumsData] = useState([])
  const [newAlbumsData, setNewAlbumsData] = useState([])

  useEffect(()=>{
    generateTopAlbumsData()
    generateNewAlbumsData()
  },[])

  const generateTopAlbumsData = async()=>{
    try {
      const data = await fetchTopAlbums()
      // console.log({data})
      setTopAlbumsData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const generateNewAlbumsData = async()=>{
    try {
      const data = await fetchNewAlbums()
      // console.log({data})
      setNewAlbumsData(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums"/>
        <Section data={newAlbumsData} type="album" title="New Albums"/>
      </div>
      <SongTabs />
      <FaqAccordion />
    </div>
  );
}

export default App;
