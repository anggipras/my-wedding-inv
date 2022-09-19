import MediaQuery from "../Util/MediaQuery";

function EventLocation() {
  const openMapTab = (url) => {
    window.open(url, "_blank");
  };

  const widthSeeMapButton = () => {
    return MediaQuery().isMobile ? "60%" : "40%";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 0rem",
        backgroundColor: MediaQuery().isMobile ? "" : "f2f3ee",
        backgroundImage: MediaQuery().isMobile
          ? `url(${require("../Assets/greenpastel4.jpg")})`
          : "",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="eventlocation_title" style={{ fontSize: "2rem" }}>
        WEDDING LOCATION
      </div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20rem",
        }}
      >
        <img width="100%" src={require("../Assets/titledivider.png")} alt="" />
      </span>

      <div
        className="eventlocation_layout"
        style={{ ...styled_component.eventlocation_layout }}
      >
        <div style={{ ...styled_component.eventlocation_smalltitle }}>
          LOCATION HOLY MATRIMONY
        </div>
        <iframe
          style={{ borderRadius: "10px" }}
          title="Holy Matrimony Location"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=800&amp;height=400&amp;hl=en&amp;q=Gereja%20GEPSULTRA%20Jemaat%20Efrata%20Anduonohu%20kendari+(GEPSULTRA)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
        <div
          data-aos="fade-up"
          style={{
            ...styled_component.eventlocation_seemaps,
            width: widthSeeMapButton(),
          }}
          onClick={() => openMapTab("https://goo.gl/maps/ccRHEjfrrCiiAAhw8")}
        >
          See Maps
        </div>
      </div>

      <div
        className="eventlocation_layout"
        style={{ ...styled_component.eventlocation_layout }}
      >
        <div style={{ ...styled_component.eventlocation_smalltitle }}>
          LOCATION WEDDING CELEBRATION
        </div>
        <iframe
          style={{ borderRadius: "10px" }}
          title="Wedding Celebration Location"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=800&amp;height=400&amp;hl=en&amp;q=restoran%20fajar%20kendari%20kendari+(restoran%20fajar%20kendari)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
        <div
          data-aos="fade-up"
          style={{
            ...styled_component.eventlocation_seemaps,
            width: widthSeeMapButton(),
          }}
          onClick={() => openMapTab("https://goo.gl/maps/Ho95S7aRfvaEP3kDA")}
        >
          See Maps
        </div>
      </div>
    </div>
  );
}

const styled_component = {
  eventlocation_layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginTop: "4rem",
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
  eventlocation_smalltitle: {
    marginBottom: "1rem",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "0.5rem",
  },
};

export default EventLocation;
