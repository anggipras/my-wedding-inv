import "../App.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCommentDots,
  faHeart,
  faHouseUser,
  faGift
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const onClickHeader = (id) => {
    props.setId(id);
  };

  return (
    <Navbar
      style={{ display: props.showHeader ? "block" : "none" }}
      className="navBar-bg"
      expand="sm"
      fixed="bottom"
    >
      <Container className="justify-content-center">
        <Row className="mt-1 mb-1" style={{ width: "100%" }}>
          <Col
            className="colCenter"
            onClick={() => onClickHeader({ evt: "opening-word" })}
          >
            <div className="iconBg">
              <FontAwesomeIcon className="iconFA" icon={faHouseUser} />
            </div>
            Home
          </Col>
          <Col
            className="colCenter"
            onClick={() => onClickHeader({ evt: "groom-bride" })}
          >
            <div className="iconBg">
              <FontAwesomeIcon className="iconFA" icon={faHeart} />
            </div>
            Couple
          </Col>
          <Col
            className="colCenter"
            onClick={() => onClickHeader({ evt: "event-date" })}
          >
            <div className="iconBg">
              <FontAwesomeIcon className="iconFA" icon={faCalendarDays} />
            </div>
            Event
          </Col>
          <Col
            className="colCenter"
            onClick={() => onClickHeader({ evt: "gift" })}
          >
            <div className="iconBg">
              <FontAwesomeIcon className="iconFA" icon={faGift} />
            </div>
            Gift
          </Col>
          <Col
            className="colCenter"
            onClick={() => onClickHeader({ evt: "wishes" })}
          >
            <div className="iconBg">
              <FontAwesomeIcon className="iconFA" icon={faCommentDots} />
            </div>
            Wishes
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
