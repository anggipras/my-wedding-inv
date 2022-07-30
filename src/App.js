import './App.css'
import Header from './Components/Header'
import MainPage from './Components/MainPage'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OpeningWord from './Components/OpeningWord';
import GroomBride from './Components/GroomBride';
import EventDate from './Components/EventDate';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <MainPage />
      <OpeningWord />
      <GroomBride />
      <EventDate />
    </div>
  )
}

export default App
