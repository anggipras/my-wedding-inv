import "../App.css";
import Groom from "../Assets/anggimain.png";
import Bride from "../Assets/goldamain.png";
import MediaQuery from "../Util/MediaQuery";
import { useEffect } from "react";
import { ClickHeader } from "../Util/HeaderMethod";
import { Instagram } from "@mui/icons-material";

function GroomBride({ currentId }) {
  useEffect(() => {
    if (currentId != null) {
      ClickHeader(currentId.evt);
    }
  }, [currentId]);

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
      <div data-aos="fade-up" className="groomandbride-tobe">
        Groom & Bride
      </div>
      <div className="groomandbride-area mt-5">
        <div
          className="d-flex flex-column justify-content-between align-items-center groom-layout"
          style={{
            marginBottom: MediaQuery().isMobile ? "16px" : "0px",
            marginRight: MediaQuery().isMobile ? "0px" : "64px",
          }}
        >
          <img
            data-aos={MediaQuery().isMobile ? "zoom-in" : "fade-right"}
            data-aos-offset="200"
            src={Groom}
            alt=""
            className="groomphoto-size"
          />
          <div className="groomword-area">
            <div data-aos="fade-zoom-in" className="groom-name">
              apt. Bernardus Anggi Prastianto, S.Farm
            </div>
            <div data-aos="fade-zoom-in" className="groom-parents">
              Putra Keluarga Bapak Petrus Hariyadi <br /> & Ibu Irene Suryati
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => goToIG("groom")}>
              <Instagram sx={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-start align-items-center bride-layout">
          <img
            data-aos={MediaQuery().isMobile ? "zoom-in" : "fade-left"}
            data-aos-offset="200"
            src={Bride}
            alt=""
            className="bridephoto-size"
          />
          <div className="brideword-area">
            <div data-aos="fade-zoom-in" className="bride-name">
              Golda Lande, SH, MH
            </div>
            <div data-aos="fade-zoom-in" className="bride-parents">
              Putri Keluarga Bapak Yunus Lande <br /> & Ibu Rosalina Sallata
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => goToIG("bride")}>
              <Instagram sx={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroomBride;
