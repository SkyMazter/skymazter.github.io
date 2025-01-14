import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ContactMe = ({ contactRef }: Props) => {
  return (
    <Container ref={contactRef}>
      <Row>
        <Col xs={12} className="border-2 border-dark border-bottom">
          <h2 className=" typewriter karla">Contact Me</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6}></Col>
        <Col xs={6}></Col>
        <Col xs={6}></Col>
        <Col xs={6}></Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
