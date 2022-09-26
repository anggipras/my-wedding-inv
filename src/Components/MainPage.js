import "../App.css";
import { Carousel } from "react-bootstrap";
import FirstPhoto from "../Assets/photo1.jpg";
import SecondPhoto from "../Assets/photo2.jpg";
import ThirdPhoto from "../Assets/photo3.jpg";
import MainVideo from "../Assets/main_video.mp4";
import { useEffect } from "react";
import { ClickHeader } from "../Util/HeaderMethod";

function MainPage({ currentId }) {
  useEffect(() => {
    // window.onload = function () {
    //   document.getElementById("mainvideo").play();
    // };
  }, []);

  useEffect(() => {
    if (currentId != null) {
      ClickHeader(currentId.evt);
    }
  }, [currentId]);

  return (
    <div id="home">
      <div
        style={{
          width: "100vw",
          height: "1px",
          backgroundColor: "white",
        }}
      />
      <video id="mainvideo" width="100%" autoPlay muted loop playsInline>
        <source src={MainVideo} type="video/mp4" />
      </video>
      {/* <Carousel
        fade={true}
        indicators={false}
        controls={false}
        interval={5000}
        pause={false}
      >
        <Carousel.Item className="outerImage">
          <img
            className="d-block w-100 innerImage"
            src={FirstPhoto}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="outerImage">
          <img
            className="d-block w-100 innerImage"
            src={SecondPhoto}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="outerImage">
          <img
            className="d-block w-100 innerImage"
            src={ThirdPhoto}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default MainPage;
