import { Button, Col, Container, Row } from "react-bootstrap";
const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Oscar .K. Comunidad</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Portfolio</Button>
        </Col>
        <Col>
          <Button>About Me</Button>
        </Col>
        <Col>
          <Button>Contact Me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
