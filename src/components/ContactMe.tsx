import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ContactMe = ({ contactRef }: Props) => {
  return (
    <Container ref={contactRef} className="py-3">
      <Row>
        <Col xs={12} className="border-2 border-dark border-bottom">
          <h2 className=" typewriter karla">Find Me Here</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-center justify-content-around p-3 my-3">
          <Link to={"https://github.com/SkyMazter"}>
            <BsGithub className="logo" />
          </Link>
          <Link to={"https://www.linkedin.com/in/oscar-comunidad-90b224168/"}>
            <BsLinkedin className="logo" />
          </Link>
          <Link to={"https://www.instagram.com/kevincomunidad/"}>
            <BsInstagram className="logo" />
          </Link>
          <Link to="https://www.youtube.com/@xenon4916">
            {" "}
            <BsYoutube className="logo" />{" "}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
