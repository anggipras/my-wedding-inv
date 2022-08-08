import "./App.css";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OpeningWord from "./Components/OpeningWord";
import GroomBride from "./Components/GroomBride";
import EventDate from "./Components/EventDate";
import EventLocation from "./Components/EventLocation";
import OurGallery from "./Components/OurGalley";
import { useEffect, useState } from "react";
import { AoS } from "./Util/Aos";
import "aos/dist/aos.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  const [id, setId] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [readyPage, setReadyPage] = useState(false);

  useEffect(() => {
    AoS();
    setTimeout(() => {
      setPercentage(20);
    }, 500);
    setTimeout(() => {
      setPercentage(50);
    }, 1000);
    setTimeout(() => {
      setPercentage(70);
    }, 1500);
    setTimeout(() => {
      setPercentage(100);
    }, 2000);
    setTimeout(() => {
      setReadyPage(true);
    }, 2500);
  }, []);

  return (
    <>
      {readyPage ? (
        <div>
          <Header setId={setId} />
          <MainPage currentId={id} />
          <OpeningWord />
          <GroomBride currentId={id} />
          <EventDate currentId={id} />
          <EventLocation />
          <OurGallery currentId={id} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div style={{ width: "10rem", height: "10rem" }}>
            <CircularProgressbar
              value={percentage}
              maxValue={100}
              text={`${percentage}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",
                // Text size
                textSize: "16px",
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                // Colors
                pathColor: `rgba(119, 221, 118, 100)`,
                textColor: "#77dd76",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
