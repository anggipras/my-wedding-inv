import { useEffect } from "react";
import "../App.css";
import AnG from "../Assets/ang.png";
import { ClickHeader } from "../Util/HeaderMethod";

function OpeningWord({ currentId }) {
  useEffect(() => {
    if (currentId != null) {
      ClickHeader(currentId.evt);
    }
  }, [currentId]);

  return (
    <>
      <div id="opening-word" className="OpeningWord-layout">
        <img data-aos="zoom-in" src={AnG} alt="" className="AnG-size" />
        <div data-aos="fade-up" className="OpeningWord-size">
          <div className="OpeningTitle">Groom & Bride</div>
          <div className="OpeningContent">
            "God has made everything wonderful in His Time; wonderful when He
            unites us, build our love and unites us into holy marriage"
          </div>
        </div>
      </div>
    </>
  );
}

export default OpeningWord;
