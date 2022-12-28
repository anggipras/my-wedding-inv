import "../App.css";
import SecondVideo from "../Assets/second_video.mp4";
import { useEffect } from "react";

function SecondVideoComp() {
  useEffect(() => {
    document.getElementById("mySecondvideo").play();
  }, []);

  return (
    <div id="secondVideo">
      <video id="mySecondvideo" muted playsInline loop>
        <source src={SecondVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default SecondVideoComp;
