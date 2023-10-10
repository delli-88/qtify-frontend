import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CardGrid from './components/CardGrid/CardGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <CardGrid albumType="top"/>
      <CardGrid albumType="new"/>
    </div>
  );
}

export default App;
