import { useEffect } from "react";
import "../App.css";

function EventDate() {
  useEffect(() => {
    let countDownDate = new Date("Feb 25, 2023 09:00:00").getTime();
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="eventdate"
      document.getElementById("eventdatedays").innerHTML = days;
      document.getElementById("eventdatehours").innerHTML = hours;
      document.getElementById("eventdateminutes").innerHTML = minutes;
      document.getElementById("eventdateseconds").innerHTML = seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center EventDate-layout">
        <div className="eventdate-title">
          <img
            className="eventdate-title-image"
            src={require("../Assets/savethedate.png")}
            alt=""
          />
        </div>
        <div className="eventdate-content">
          "And more than all, have love, the only way in which you may be
          completely joined together." <br /> (Colossians 3:14)
        </div>
        <div className="eventdate-layout">
          <div className="eventdate-eacharea">
            <div id="eventdatedays" className="eventdate-info">
              0
            </div>
            <div className="eventdate-info">Days</div>
          </div>

          <div className="eventdate-eacharea">
            <div id="eventdatehours" className="eventdate-info">
              0
            </div>
            <div className="eventdate-info">Hours</div>
          </div>

          <div className="eventdate-eacharea">
            <div id="eventdateminutes" className="eventdate-info">
              0
            </div>
            <div className="eventdate-info">Minutes</div>
          </div>

          <div className="eventdate-eacharea">
            <div id="eventdateseconds" className="eventdate-info">
              0
            </div>
            <div className="eventdate-info">Seconds</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDate;
