import '../App.css'
import TopFlower from '../Assets/topflower.png'

function OpeningWord() {
  return (
    <>
      <div className="OpeningWord-layout">
        <img src={TopFlower} alt="" className="topflower-size" />
        <div className='OpeningWord-size'>
          <div className='OpeningTitle'>We found love</div>
          <div className='OpeningContent'>
            "God has made everything wonderful in His Time; wonderful when He
            unites us, build our love and unites us into holy marriage"
          </div>
        </div>
      </div>
    </>
  )
}

export default OpeningWord
