import "../App.css";
import ThirdVideo from "../Assets/anggi_golda.mp4";
import { useEffect } from "react";

function ThirdVideoComp({ vidCond }) {
  useEffect(() => {
    if (vidCond) {
        document.getElementById("myThirdvideo").play();
    }
  }, [vidCond]);

  return (
    <div id="thirdVideo">
      <video id="myThirdvideo" muted playsInline loop>
        <source src={ThirdVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default ThirdVideoComp;
