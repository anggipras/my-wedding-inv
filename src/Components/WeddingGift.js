import { useState } from "react";
import "../App.css";
import MediaQuery from "../Util/MediaQuery";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Add, ContentCopy, CardGiftcard } from "@mui/icons-material";

function CustomToggle({ children, eventKey, setCopy }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => setCopy());

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#a3ddcc",
        padding: "0rem 0.5rem",
      }}
    >
      <div>{children}</div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={decoratedOnClick}
      >
        <Add sx={{ fontSize: "1rem", color: "black", cursor: "pointer" }} />
      </span>
    </div>
  );
}

function WeddingGiftModal(props) {
  const [copied, setCopied] = useState("Copy");

  const giftContent = (name, bank, norek) => {
    return (
      <div style={{ ...styled_component.centeredLayout }}>
        <div className="fontFam-quicksand">{name}</div>
        <div className="fontFam-quicksand">Bank {bank}</div>
        <div className="fontFam-quicksand">{norek}</div>
        {copyButton(norek)}
      </div>
    );
  };

  const copyButton = (norek) => {
    return (
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
          marginTop: "1rem",
        }}
      >
        <span
          style={{
            display: copied === "Copy" ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContentCopy sx={{ fontSize: "1rem", color: "black" }} />
        </span>
        <div
          className="fontFam-quicksand"
          style={{
            fontSize: "1rem",
            textAlign: "center",
            color: "black",
            marginLeft: ".3rem",
          }}
          onClick={() => doneCopied(norek)}
        >
          {copied}
        </div>
      </div>
    );
  };

  const doneCopied = (norek) => {
    setCopied("Berhasil salin");
    navigator.clipboard.writeText(norek);
    setTimeout(() => {
      setCopied("Copy");
    }, 2000);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div
          className="fontFam-quicksand"
          style={{
            fontSize: MediaQuery().isMobile ? "0.8rem" : "1rem",
          }}
        >
          Happiness for the bride and groom by giving a little gift
        </div> */}
        <Accordion
          style={{ padding: "1rem 2rem", width: "100%" }}
          defaultActiveKey="-1"
        >
          <div className="mb-3">
            <CustomToggle setCopy={() => setCopied("Copy")} eventKey="0">
              FOR THE GROOM
            </CustomToggle>
            <Accordion.Collapse eventKey="0">
              {giftContent("Bernardus Anggi Prastianto", "BCA", "8020413736")}
            </Accordion.Collapse>
          </div>
          <div>
            <CustomToggle setCopy={() => setCopied("Copy")} eventKey="1">
              FOR THE BRIDE
            </CustomToggle>
            <Accordion.Collapse eventKey="1">
              {giftContent("Golda Lande", "BCA Digital", "008251607333")}
            </Accordion.Collapse>
          </div>
        </Accordion>
      </div>
    </Modal>
  );
}

function WeddingGift() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
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
          backgroundColor: "rgba(232, 244, 234, 0.8)",
          boxShadow: "rgb(0 0 0 / 50%) 0px 2px 8px",
          borderRadius: "2rem",
          padding: "2rem 0",
        }}
      >
        <CardGiftcard sx={{ fontSize: "5rem", color: "black" }} />
        <div className="eventlocation_title" style={{ fontSize: "2rem" }}>
          WEDDING GIFT
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

        <div
          className="fontFam-quicksand mt-3 mb-5"
          style={{
            width: MediaQuery().isMobile ? "80%" : "50%",
            textAlign: "center",
          }}
        >
          Your presence is more important to us than anything. However, if you
          would like to give us a gift we provide digital envelopes to make it
          easier for you.
        </div>

        <div
          onClick={() => setModalShow(true)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#a3ddcc",
            color: "black",
            borderRadius: "2rem",
            padding: "1rem 5rem",
            cursor: "pointer",
            boxShadow: "3px 3px 10px 0px rgba(0,0,0,0.4)",
          }}
        >
          Send Gift
        </div>
      </div>
      <WeddingGiftModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

const styled_component = {
  centeredLayout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0rem",
  },
};

export default WeddingGift;
