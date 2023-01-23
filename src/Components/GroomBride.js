import "../App.css";
import Groom from "../Assets/anggimain.png";
import Bride from "../Assets/goldamain.png";
import MediaQuery from "../Util/MediaQuery";
import { useEffect } from "react";
import { ClickHeader } from "../Util/HeaderMethod";
import { Instagram } from "@mui/icons-material";
import SecondVideo from "../Assets/second_video.mp4";

function GroomBride({ currentId, vidCond }) {
  useEffect(() => {
    if (currentId != null) {
      ClickHeader(currentId.evt);
    }
  }, [currentId]);

  useEffect(() => {
    if (vidCond) {
      document.getElementById("mySecondvideo").play();
    }
  }, [vidCond]);

  const goToIG = (param) => {
    window.open(
      param === "groom"
        ? "https://www.instagram.com/anggipras30/"
        : "https://www.instagram.com/goldalande/",
      "_blank"
    );
  };

  return (
    <div
      id="groom-bride"
      className="d-flex flex-column justify-content-center align-items-center GroomBride-layout"
    >
      <div className="groomandbride-tobe">
        Groom & Bride
      </div>
      <div className="groomandbride-area mt-3">
        <div id="secondVideo">
          <video id="mySecondvideo" muted playsInline loop>
            <source src={SecondVideo} type="video/mp4" />
          </video>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-between align-items-center groom-layout">
            <div className="groomword-area">
              <div className="groom-name">
                Anggi
              </div>
              <hr className="name-divider" />
              <div className="groom-fullname">Bernardus Anggi Prastianto</div>
              <div className="groom-parents">
                Son Of <br /> Mr. Petrus Hariyadi <br /> & <br /> Mrs. Irene
                Suryati
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => goToIG("groom")}
              >
                <Instagram sx={{ fontSize: "1.5rem" }} />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-start align-items-center bride-layout">
            <div className="brideword-area">
              <div className="bride-name">
                Golda
              </div>
              <hr className="name-divider" />
              <div className="bride-fullname">Golda Lande</div>
              <div className="bride-parents">
                Daughter of <br /> Mr. Yunus Lande <br /> & <br /> Mrs. Rosalina
                Sallata
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => goToIG("bride")}
              >
                <Instagram sx={{ fontSize: "1.5rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroomBride;
