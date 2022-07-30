import "./App.css";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OpeningWord from "./Components/OpeningWord";
import GroomBride from "./Components/GroomBride";
import EventDate from "./Components/EventDate";
import { useEffect } from "react";
import { AoS } from "./Util/Aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AoS();
  });

  return (
    <div>
      {/* <Header /> */}
      <MainPage />
      <OpeningWord />
      <GroomBride />
      <EventDate />
    </div>
  );
}

export default App;
