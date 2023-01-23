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
    let countDownDate = new Date("Mar 4, 2023 10:00:00").getTime();
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
    return MediaQuery().isMobile ? "1rem" : "2rem";
  };

  const remindInCalendar = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div class="custom-shape-divider-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="shape-fill"
              opacity=".33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
              class="shape-fill"
              opacity=".66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
              class="shape-fill"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
          </svg>
        </div>
        <div
          id="event-date"
          className="d-flex flex-column justify-content-center align-items-center EventDate-layout"
        >
          <div className="bg-photo-1">
            <div className="eventdate-top-layout">
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
            </div>
          </div>

          <div className="eventdate-bottom-layout">
            <div
              className="eventdate_place"
              style={{
                ...styled_component.eventdate_place,
                flexDirection: MediaQuery().isMobile ? "column" : "row",
              }}
            >
              <div className="bg-photo-2">
                <div
                  className="holy_matrimony"
                  style={{ padding: paddingPlaceLayout() }}
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
                          textAlign: "end",
                        }}
                      >
                        <div className="holy_matrimony_content_location_church">
                          Gedung GEPSULTRA <br />
                          Jemaat Efrata Anduonohu
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
                        "https://calendar.google.com/calendar/u/0/r/eventedit?text=Anggi+%26+Golda+Pemberkatan&dates=20230304T110000/20230304T130000&ctz=Asia/Makassar&details&location=https://goo.gl/maps/ccRHEjfrrCiiAAhw8&pli=1&uid=1521339627addtocalendar&sf=true&output=xml"
                      )
                    }
                  >
                    Save The Date
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
                    See Location
                  </div>
                </div>
              </div>

              <div className="bg-photo-3">
                <div
                  className="wedding_celebration"
                  style={{
                    padding: paddingPlaceLayout(),
                  }}
                >
                  <div
                    className="event_place_title"
                    style={{
                      ...styled_component.event_place_title,
                    }}
                  >
                    Reception
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
                          textAlign: "start",
                        }}
                      >
                        <div className="holy_matrimony_content_location_church">
                          Phinisi Ballroom Hotel Claro
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
                        "https://calendar.google.com/calendar/u/0/r/eventedit?text=Anggi+%26+Golda+Resepsi&dates=20230304T190000/20230304T220000&ctz=Asia/Makassar&details&location=https://goo.gl/maps/i5VgWE4x4ApEmUQn6&pli=1&uid=1521339627addtocalendar&sf=true&output=xml"
                      )
                    }
                  >
                    Save The Date
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
                    See Location
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="shape-fill"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
              class="shape-fill"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
              class="shape-fill"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

const styled_component = {
  eventdate_place: {
    display: "flex",
    width: "100%",
  },
  event_place_title: {
    borderRadius: "0.5rem",
    backgroundColor: "#a3ddcc",
    textAlign: "center",
    color: "black",
    fontSize: "1.3rem",
    padding: "1rem 0",
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
    color: "black",
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
    color: "black",
    marginTop: "2rem",
  },
};

export default EventDate;
