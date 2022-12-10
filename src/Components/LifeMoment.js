import "../App.css";

function LifeMoment() {
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
        <div className="liveStreaming-title mb-3" style={{ fontSize: "3rem" }}>
          Life Moment
        </div>

        <div className="lifemoment-text mb-3 px-4">
          Bantu kami mengabadikan momen-momen bahagia di acara pernikahan kami
          dengan menandai postingan anda dengan hashtag berikut:
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "0 2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#b8d8be",
              borderRadius: "6px",
              padding: "0.3rem 1.5rem",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: "1rem",
                color: "white",
              }}
            >
              #AnggiGolda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeMoment;
