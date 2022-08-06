import "./App.css";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OpeningWord from "./Components/OpeningWord";
import GroomBride from "./Components/GroomBride";
import EventDate from "./Components/EventDate";
import EventLocation from "./Components/EventLocation";
import { useEffect, useState } from "react";
import { AoS } from "./Util/Aos";
import "aos/dist/aos.css";

function App() {
  const [id, setId] = useState(null);

  useEffect(() => {
    AoS();
  });

  return (
    <div>
      {/* <Header setId={setId} /> */}
      <MainPage currentId={id} />
      <OpeningWord />
      <GroomBride currentId={id} />
      <EventDate currentId={id} />
      <EventLocation />
    </div>
  );
}

export default App;
