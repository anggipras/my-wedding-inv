import "../App.css";
import AnG from "../Assets/ang.png";
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
      <img data-aos="fade-up" src={AnG} alt="" className="AnG-size" />
      <div data-aos="fade-up" className="groomandbride-tobe">
        Groom and Bride <br /> to Be
      </div>
      <div className="groomandbride-area">
        <div className="d-flex flex-column justify-content-between align-items-center groom-layout">
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
              Putra Sulung Bapak Petrus Hariyadi <br /> & Ibu Irene Suryati
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => goToIG("groom")}>
              <Instagram sx={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        </div>
        <div className="name-divider">and</div>
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
              Putri Sulung Bapak Yunus Lande <br /> & Ibu Rosalina Sallata
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
