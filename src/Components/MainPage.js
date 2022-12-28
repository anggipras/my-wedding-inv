import "../App.css";
import { Carousel } from "react-bootstrap";
import FirstPhoto from "../Assets/photo1.jpg";
import SecondPhoto from "../Assets/photo2.jpg";
import ThirdPhoto from "../Assets/photo3.jpg";
import MainVideo from "../Assets/anggi_golda.mp4";
import { useEffect } from "react";
import { ClickHeader } from "../Util/HeaderMethod";

function MainPage({ currentId, vidCond }) {
  useEffect(() => {
    if (vidCond) {
      document.getElementById("mainvideo").play();
    }
  }, [vidCond]);

  useEffect(() => {
    if (currentId != null) {
      ClickHeader(currentId.evt);
    }
  }, [currentId]);

  return (
    <div id="home">
      <video id="mainvideo" muted playsInline loop>
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
