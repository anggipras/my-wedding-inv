//css
import "./App.css";
import "aos/dist/aos.css";
import "react-circular-progressbar/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//component
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import HeaderSticky from "./Components/HeaderSticky";
import OpeningWord from "./Components/OpeningWord";
import GroomBride from "./Components/GroomBride";
import EventDate from "./Components/EventDate";
import LiveStreaming from "./Components/LiveStreaming";
import LifeMoment from "./Components/LifeMoment";
import WeddingGift from "./Components/WeddingGift";
import ThirdVideoComp from "./Components/ThirdVideo";
import Wishes from "./Components/Wishes";

//library
import { useEffect, useState } from "react";
import { AoS } from "./Util/Aos";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { PlayCircle, PauseCircle, Drafts } from "@mui/icons-material";

//assets
import WeddingSong from "./Assets/onelife.mp3";
import MainPhotoDesktop from "./Assets/photo3.jpg";
import MainPhotoMobile from "./Assets/photo2.jpg";
import { useMediaQuery } from "react-responsive";

function App() {
  const [id, setId] = useState(null);
  // const [percentage, setPercentage] = useState(0);
  const [readyPage, setReadyPage] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [playAudio, setPlayAudio] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  let music = document.getElementById("weddingAudio");
  let mediaQueryMobile = useMediaQuery({ query: "(max-width: 768px)" });
  let timeout = null;

  useEffect(() => {
    AoS();
    // setTimeout(() => {
    //   setPercentage(20);
    // }, 500);
    // setTimeout(() => {
    //   setPercentage(50);
    // }, 1000);
    // setTimeout(() => {
    //   setPercentage(70);
    // }, 1500);
    // setTimeout(() => {
    //   setPercentage(100);
    // }, 2500);
    setTimeout(() => {
      setReadyPage(true);
    }, 100);
    const toGuest = new URLSearchParams(window.location.search).get("to");
    setGuestName(toGuest);
    document.addEventListener("scroll", onScrollHeader);
    return () => {
      document.removeEventListener("scroll", onScrollHeader);
    };
  }, []);

  const onScrollHeader = () => {
    setIsScrolling(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  };

  useEffect(() => {
    if (showHeader) {
      document.body.style.overflowY = "visible";
      controlMusic();
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [showHeader, playAudio]);

  const controlMusic = () => {
    if (playAudio) {
      music.play();
    } else {
      music.pause();
    }
  };

  const openInv = () => {
    setShowHeader(true);
    setPlayVideo(true);
  };

  const controlAudio = () => {
    setPlayAudio(!playAudio);
  };

  return (
    <>
      {readyPage ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: 0,
              left: 0,
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              zIndex: "100",
              backgroundColor: "white",
              opacity: "1",
              overflow: "hidden",
              transform: showHeader ? "translateY(-100%)" : "translateY(0%)",
              transition: "transform 0.5s, opacity 0.5s",
            }}
          >
            {mediaQueryMobile ? (
              <img
                src={MainPhotoMobile}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100vh",
                  width: "100%",
                  zIndex: -10,
                  objectFit: "cover",
                  filter: "brightness(50%)",
                }}
                alt=""
              />
            ) : (
              <img
                src={MainPhotoDesktop}
                style={{
                  position: "absolute",
                  top: -150,
                  left: 0,
                  width: "100%",
                  zIndex: -10,
                  filter: "brightness(50%)",
                }}
                alt=""
              />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: "5rem",
              }}
            >
              <div className="groombride-name">Anggi & Golda</div>
              <div
                className="fontFam-quicksand fontBold whiteColor"
                style={{ fontSize: "12px" }}
              >
                Dear,
              </div>
              <div
                className="fontFam-quicksand fontBold whiteColor"
                style={{ fontSize: "18px" }}
              >
                {guestName}
              </div>
              <div
                className="fontFam-quicksand whiteColor my-2"
                style={{ textAlign: "center", fontSize: "10px" }}
              >
                We apologize for any misspelled name/title
              </div>
              <div className="open-inv-button" onClick={() => openInv()}>
                <span style={{ marginRight: "5px" }}>
                  <Drafts sx={{ fontSize: "1.3rem", color: "black" }} />
                </span>
                <div>Open Invitation</div>
              </div>
            </div>
          </div>
          <div className="mainLayout">
            {!isScrolling ? (
              <Header showHeader={showHeader} setId={setId} />
            ) : (
              <></>
            )}
            {/* <MainPage currentId={id} vidCond={playVideo} /> */}
            <HeaderSticky />
            <div>
              <ThirdVideoComp vidCond={playVideo} />
            </div>
            <OpeningWord currentId={id} />
            <GroomBride currentId={id} vidCond={playVideo} />
            <EventDate currentId={id} />
            <LiveStreaming />
            <LifeMoment />
            <div className="bg-wishes-and-gift">
              <div class="custom-shape-divider-wishesgift-top">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2600 131.1"
                  preserveAspectRatio="none"
                >
                  <path
                    class="shape-fill"
                    d="M0 0L2600 0 2600 69.1 0 0z"
                  ></path>
                  <path
                    class="shape-fill"
                    opacity=".5"
                    d="M0 0L2600 0 2600 69.1 0 69.1z"
                  ></path>
                  <path
                    class="shape-fill"
                    opacity=".25"
                    d="M2600 0L0 0 0 130.1 2600 69.1z"
                  ></path>
                </svg>{" "}
              </div>
              <WeddingGift currentId={id} />
              <Wishes currentId={id} guestName={guestName} />
            </div>
            <audio id="weddingAudio" loop>
              <source src={WeddingSong} type="audio/mpeg" />
            </audio>
            <div onClick={() => controlAudio()}>
              {playAudio ? (
                <PauseCircle
                  sx={{
                    fontSize: "3rem",
                    color: "rgb(0, 0, 0, 0.6)",
                    position: "fixed",
                    top: 0,
                    marginTop: "1rem",
                    right: 0,
                    marginRight: "1rem",
                    cursor: "pointer",
                    zIndex: "30",
                  }}
                />
              ) : (
                <PlayCircle
                  sx={{
                    fontSize: "3rem",
                    color: "rgb(0, 0, 0, 0.6)",
                    position: "fixed",
                    top: 0,
                    marginTop: "1rem",
                    right: 0,
                    marginRight: "1rem",
                    cursor: "pointer",
                    zIndex: "30",
                  }}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {/* <div style={{ width: "10rem", height: "10rem" }}>
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
          </div> */}
        </div>
      )}
    </>
  );
}

export default App;
