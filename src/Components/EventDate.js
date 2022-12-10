import { useEffect } from "react";
import { ClickHeader } from "../Util/HeaderMethod";
import "../App.css";
import {
  CalendarMonthOutlined,
  AccessAlarmOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import MediaQuery from "../Util/MediaQuery";

function EventDate({ currentId }) {
  useEffect(() => {
    let countDownDate = new Date("Mar 4, 2023 09:00:00").getTime();
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

  useEffect(() => {
    if (currentId != null) {
      ClickHeader(currentId.evt);
    }
  }, [currentId]);

  const openMapTab = (url) => {
    window.open(url, "_blank");
  };

  const fontSizeContent = () => {
    return MediaQuery().isMobile ? "1rem" : "1.2rem";
  };

  const paddingPlaceLayout = () => {
    return MediaQuery().isMobile ? "0rem" : "0rem 2rem";
  };

  const remindInCalendar = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        id="event-date"
        className="d-flex flex-column justify-content-center align-items-center EventDate-layout"
      >
        <div className="eventdate-title">
          <img
            data-aos="zoom-in-up"
            className="eventdate-title-image"
            src={require("../Assets/savethedate.png")}
            alt=""
          />
        </div>
        <div className="eventdate-content">
          "And more than all, have love, the only way in which you may be
          completely joined together." <br /> (Colossians 3:14)
        </div>
        <div className="eventdate-innerlayout">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="eventdate-eacharea"
          >
            <div id="eventdatedays" className="eventdate-info">
              0
            </div>
            <div className="eventdate-info">Days</div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="eventdate-eacharea"
          >
            <div id="eventdatehours" className="eventdate-info">
              0
            </div>
            <div className="eventdate-info">Hours</div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="eventdate-eacharea"
          >
            <div id="eventdateminutes" className="eventdate-info">
              0
            </div>
            <div className="eventdate-info">Minutes</div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="eventdate-eacharea"
          >
            <div id="eventdateseconds" className="eventdate-info">
              0
            </div>
            <div className="eventdate-info">Seconds</div>
          </div>
        </div>

        <div
          className="eventdate_place"
          style={{
            ...styled_component.eventdate_place,
            flexDirection: MediaQuery().isMobile ? "column" : "row",
            width: MediaQuery().isMobile ? "100%" : "70%",
          }}
        >
          <div
            className="holy_matrimony"
            style={{ padding: paddingPlaceLayout(), width: "100%" }}
          >
            <div
              className="event_place_title"
              style={{
                ...styled_component.event_place_title,
              }}
            >
              Holy Matrimony
            </div>
            <div
              className="holy_matrimony_content"
              style={{
                ...styled_component.holy_matrimony_content,
                alignItems: "flex-end",
              }}
            >
              <div
                data-aos="fade-up"
                className="holy_matrimony_content_date"
                style={{
                  ...styled_component.holy_matrimony_content_date,
                }}
              >
                <div
                  className="holy_matrimony_contentSize"
                  style={{
                    marginRight: "1rem",
                    fontSize: fontSizeContent(),
                  }}
                >
                  Saturday, March 4th 2023
                </div>
                <CalendarMonthOutlined sx={{ fontSize: "2.5rem" }} />
              </div>
              <div
                data-aos="fade-up"
                className="holy_matrimony_content_time"
                style={{
                  ...styled_component.holy_matrimony_content_time,
                }}
              >
                <div
                  className="holy_matrimony_contentSize"
                  style={{
                    marginRight: "1rem",
                    fontSize: fontSizeContent(),
                  }}
                >
                  11:00 WITA
                </div>
                <AccessAlarmOutlined sx={{ fontSize: "2.5rem" }} />
              </div>
              <div
                data-aos="fade-up"
                className="holy_matrimony_content_location"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="holy_matrimony_contentSize"
                  style={{
                    marginRight: "1rem",
                    fontSize: fontSizeContent(),
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <div className="holy_matrimony_content_location_church">
                    Gedung GEPSULTRA Jemaat Efrata Anduonohu
                  </div>
                  <div className="holy_matrimony_content_location_area">
                    Jl. Srikaya No.5, Anduonohu
                  </div>
                </div>
                <LocationOnOutlined sx={{ fontSize: "2.5rem" }} />
              </div>
            </div>
            <div
              data-aos="fade-zoom-in"
              className="event_place_button"
              style={{
                ...styled_component.event_place_button,
              }}
              onClick={() =>
                remindInCalendar(
                  "https://calendar.google.com/calendar/u/0/r/eventedit?text=Anggi+%26+Golda+Holy+Matrimony&dates=20230304T090000/20230304T110000&ctz=Asia/Makassar&details&location=https://goo.gl/maps/ccRHEjfrrCiiAAhw8&pli=1&uid=1521339627addtocalendar&sf=true&output=xml"
                )
              }
            >
              Save Holy Matrimony
            </div>
            <div
              data-aos="fade-up"
              style={{
                ...styled_component.eventlocation_seemaps,
              }}
              onClick={() =>
                openMapTab("https://goo.gl/maps/ccRHEjfrrCiiAAhw8")
              }
            >
              Lihat Lokasi
            </div>
          </div>

          <div
            className="wedding_celebration"
            style={{
              padding: paddingPlaceLayout(),
              width: "100%",
              marginTop: MediaQuery().isMobile ? "4rem" : "0rem",
            }}
          >
            <div
              className="event_place_title"
              style={{
                ...styled_component.event_place_title,
              }}
            >
              Wedding Reception
            </div>
            <div
              className="holy_matrimony_content"
              style={{
                ...styled_component.holy_matrimony_content,
                alignItems: "flex-start",
              }}
            >
              <div
                data-aos="fade-up"
                className="holy_matrimony_content_date"
                style={{
                  ...styled_component.holy_matrimony_content_date,
                  flexDirection: "row-reverse",
                }}
              >
                <div
                  className="holy_matrimony_contentSize"
                  style={{
                    marginLeft: "1rem",
                    fontSize: fontSizeContent(),
                  }}
                >
                  Saturday, March 4th 2023
                </div>
                <CalendarMonthOutlined sx={{ fontSize: "2.5rem" }} />
              </div>
              <div
                data-aos="fade-up"
                className="holy_matrimony_content_time"
                style={{
                  ...styled_component.holy_matrimony_content_time,
                  flexDirection: "row-reverse",
                }}
              >
                <div
                  className="holy_matrimony_contentSize"
                  style={{
                    marginLeft: "1rem",
                    fontSize: fontSizeContent(),
                  }}
                >
                  19:00 WITA
                </div>
                <AccessAlarmOutlined sx={{ fontSize: "2.5rem" }} />
              </div>
              <div
                data-aos="fade-up"
                className="holy_matrimony_content_location"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexDirection: "row-reverse",
                }}
              >
                <div
                  className="holy_matrimony_contentSize"
                  style={{
                    marginLeft: "1rem",
                    fontSize: fontSizeContent(),
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="holy_matrimony_content_location_church">
                    Phinisi Ballroom, Hotel Claro Kendari
                  </div>
                  <div className="holy_matrimony_content_location_area">
                    Jl. Edi Sabara No.89, Lahundape, Kendari Barat
                  </div>
                </div>
                <LocationOnOutlined sx={{ fontSize: "2.5rem" }} />
              </div>
            </div>
            <div
              data-aos="fade-zoom-in"
              className="event_place_button"
              style={{
                ...styled_component.event_place_button,
              }}
              onClick={() =>
                remindInCalendar(
                  "https://calendar.google.com/calendar/u/0/r/eventedit?text=Anggi+%26+Golda+Wedding+Celebration&dates=20230304T110000/20230304T130000&ctz=Asia/Makassar&details&location=https://goo.gl/maps/Ho95S7aRfvaEP3kDA&pli=1&uid=1521339627addtocalendar&sf=true&output=xml"
                )
              }
            >
              Save Wedding Reception
            </div>
            <div
              data-aos="fade-up"
              style={{
                ...styled_component.eventlocation_seemaps,
              }}
              onClick={() =>
                openMapTab("https://goo.gl/maps/i5VgWE4x4ApEmUQn6")
              }
            >
              Lihat Lokasi
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styled_component = {
  eventdate_place: {
    display: "flex",
    marginTop: "4rem",
  },
  event_place_title: {
    borderRadius: "0.5rem",
    backgroundColor: "#a3ddcc",
    textAlign: "center",
    color: "white",
    fontSize: "1.3rem",
    padding: "1rem 0"
  },
  holy_matrimony_content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "3rem 0rem",
  },
  holy_matrimony_content_date: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  holy_matrimony_content_time: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "2rem 0rem",
  },
  event_place_button: {
    borderRadius: "0.5rem",
    backgroundColor: "#b8d8be",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "white",
    padding: "0.5rem 0rem",
    boxShadow: "3px 3px 10px 0px rgba(0,0,0,0.4)",
    cursor: "pointer",
  },
  eventlocation_seemaps: {
    backgroundColor: "#a3ddcc",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer",
    padding: "0.5rem 0rem",
    color: "white",
    marginTop: "2rem",
  },
};

export default EventDate;
