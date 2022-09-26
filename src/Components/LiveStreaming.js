import "../App.css";
import { YouTube } from "@mui/icons-material";

function LiveStreaming() {
  const openYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCQAoujLV2ZSMfeHpvGorZOA",
      "_blank"
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          borderRadius: "0.5rem",
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 8px",
          padding: "2rem 0rem",
        }}
      >
        <div className="eventlocation_title" style={{ fontSize: "2rem" }}>
          LIVE STREAMING
        </div>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "17rem",
            marginBottom: "1rem",
          }}
        >
          <img
            width="100%"
            src={require("../Assets/titledivider.png")}
            alt=""
          />
        </span>

        <div className="liveStreaming-gb mt-2 mb-2">Anggi & Golda</div>
        <div>Saturday, 4th March 2023 / 09:00 WIB</div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div onClick={() => openYoutube()}>
            <YouTube
              sx={{ fontSize: "7rem", color: "#a3ddcc", cursor: "pointer" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#b8d8be",
              borderRadius: "2rem",
              padding: "0.3rem 1.5rem",
              cursor: "pointer",
            }}
            className="liveStreaming-icon"
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <YouTube sx={{ fontSize: "2rem", color: "white" }} />
            </span>
            <div
              style={{
                fontSize: "1rem",
                textAlign: "center",
                color: "white",
                marginLeft: "1rem",
              }}
              onClick={() => openYoutube()}
            >
              Live YouTube
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveStreaming;
