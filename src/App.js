import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Card from './components/Card/Card';
import CardImage1 from './assets/cardImage1.svg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <Card cardImage={CardImage1} followers="100 Follows" title="New Bollywood"/>
    </div>
  );
}

export default App;
