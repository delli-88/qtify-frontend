import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import { fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';


function App() {

  const [topAlbumsData, setTopAlbumsData] = useState([])

  useEffect(()=>{
    generateTopAlbumsData()
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

  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums"/>
      </div>
    </div>
  );
}

export default App;
