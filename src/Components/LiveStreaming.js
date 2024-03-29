import "../App.css";
import { YouTube } from "@mui/icons-material";

function LiveStreaming() {
  const openYoutube = () => {
    window.open(
      "https://www.youtube.com/@gepsultrajemaatefrataanduo472/streams",
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
        <div className="liveStreaming-title mb-3" style={{ fontSize: "4rem" }}>
          Live Streaming
        </div>

        <div className="livestreaming-date mb-3">
          Saturday, March 4th 2023 / 11:00 WITA
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
