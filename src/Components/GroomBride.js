import "../App.css";
import AnG from "../Assets/ang.png";
import Groom from "../Assets/anggimain.png";
import Bride from "../Assets/goldamain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

function GroomBride() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center GroomBride-layout">
        <img data-aos="fade-up" src={AnG} alt="" className="AnG-size" />
        <div data-aos="fade-up" className="groomandbride-tobe">
          Groom and Bride <br /> to Be
        </div>
        <div className="groomandbride-area">
          <div className="d-flex flex-column justify-content-between align-items-center groom-layout">
            <img
              data-aos="fade-right"
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
                First Person of Bapak Petrus Hariyadi <br /> & Ibu Irene Suryati
              </div>
              <FontAwesomeIcon className="iconFAInsta" icon={faHashtag} />
            </div>
          </div>
          <div className="name-divider">and</div>
          <div className="d-flex flex-column justify-content-start align-items-center bride-layout">
            <img
              data-aos="fade-left"
              data-aos-offset="200"
              src={Bride}
              alt=""
              className="bridephoto-size"
            />
            <div className="brideword-area">
              <div data-aos="fade-zoom-in" className="bride-name">Golda Lande, SH, MH</div>
              <div data-aos="fade-zoom-in" className="bride-parents">
                First Person of Bapak Yunus Lande <br /> & Ibu Rosalina Sallata
              </div>
              <FontAwesomeIcon className="iconFAInsta" icon={faHashtag} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroomBride;
