import { Button, Col, Container, Row } from "react-bootstrap";
import P5Background from "./components/P5Background";
const App = () => {
  return (
    <div
      className="App"
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <P5Background />
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="justify-content-lg-center">
          
            <Col className="d-flex justify-content-center" lg={8}>
              <h1 className="fw-bolder typewriter text-center">
                Oscar K. Comunidad
              </h1>
            </Col>

          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p>
                Software Developer | Photographer | Digital Justice Advocate
              </p>
            </Col>
          </Row>
          {/* <Row>
            <Col className="d-flex justify-content-center">
              <p>Message of the day</p>
            </Col>
          </Row> */}
          <Row>
            <Col className="d-flex justify-content-center">
              <Button variant="outline-danger">Portfolio</Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button variant="outline-primary">About Me</Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button variant="outline-success">Contact Me</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
