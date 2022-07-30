import '../App.css'
import AnG from '../Assets/ang.png'
import Groom from '../Assets/anggimain.png'
import Bride from '../Assets/goldamain.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

function GroomBride() {

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
    Aos.refresh()
  }, [])

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center GroomBride-layout">
        <img src={AnG} alt="" className="AnG-size" />
        <div className="groomandbride-tobe">
          Groom and Bride <br /> to Be
        </div>
        <div className="groomandbride-area">
          <div className="d-flex flex-column justify-content-between align-items-center groom-layout">
            <img data-aos="fade-right" data-aos-offset="200" src={Groom} alt="" className="groomphoto-size" />
            <div className="groomword-area">
              <div className="groom-name">
                apt. Bernardus Anggi Prastianto, S.Farm
              </div>
              <div className="groom-parents">
                First Person of Bapak Petrus Hariyadi <br /> & Ibu Irene Suryati
              </div>
              <FontAwesomeIcon className="iconFAInsta" icon={faHashtag} />
            </div>
          </div>
          <div className="name-divider">and</div>
          <div className="d-flex flex-column justify-content-start align-items-center bride-layout">
            <img data-aos="fade-left" data-aos-offset="200" src={Bride} alt="" className="bridephoto-size" />
            <div className="brideword-area">
              <div className="bride-name">Golda Lande, SH, MH</div>
              <div className="bride-parents">
                First Person of Bapak Yunus Lande <br /> & Ibu Rosalina Sallata
              </div>
              <FontAwesomeIcon className="iconFAInsta" icon={faHashtag} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroomBride
