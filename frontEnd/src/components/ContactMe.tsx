import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";

interface Props {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ContactMe = ({ contactRef }: Props) => {
  return (
    <Container ref={contactRef}>
      <Row>
        <Col xs={12} className="border-2 border-dark border-bottom">
          <h2 className=" typewriter karla">Find Me Here</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className="centerThis">
          <div
            className="centerThis"
            style={{
              height: "90%",
              width: "90%",
            }}
          >
            <BsGithub className="logo" />
          </div>
        </Col>
        <Col xs={3} className="centerThis">
          <div
            className="centerThis"
            style={{
              height: "90%",
              width: "90%",
            }}
          >
            <BsLinkedin className="logo" />
          </div>
        </Col>
        <Col xs={3} className="centerThis">
          <div
            className="centerThis"
            style={{
              height: "90%",
              width: "90%",
            }}
          >
            <BsInstagram className="logo" />
          </div>
        </Col>
        <Col xs={3} className="centerThis">
          <div
            className="centerThis"
            style={{
              height: "90%",
              width: "90%",
            }}
          >
            <BsYoutube className="logo" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
