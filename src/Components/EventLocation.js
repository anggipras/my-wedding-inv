import MediaQuery from "../Util/MediaQuery";
import backgroundImg from "../Assets/greenpastel1.jpg"

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
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "100% 100%"
      }}
    >
      <div className="eventlocation_title" style={{ fontSize: "2rem" }}>
        WEDDING LOCATION
      </div>

      <div
        className="eventlocation_layout"
        style={{ ...styled_component.eventlocation_layout }}
      >
        <div style={{ marginBottom: "1rem" }}>LOCATION HOLY MATRIMONY</div>
        <iframe
          style={{ borderRadius: "10px" }}
          title="Holy Matrimony Location"
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
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
        <div style={{ marginBottom: "1rem" }}>LOCATION WEDDING CELEBRATION</div>
        <iframe
          style={{ borderRadius: "10px" }}
          title="Wedding Celebration Location"
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
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
    backgroundColor: "#b8d8be",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer",
    padding: "0.5rem 0rem",
    color: "white",
    marginTop: "2rem",
  },
};

export default EventLocation;
