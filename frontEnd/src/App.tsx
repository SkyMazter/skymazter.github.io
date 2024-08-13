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
          
          <Row>
            <Col className="d-flex justify-content-center">
              <h1 className="fw-bolder" style={{
                fontFamily: "Karla, sans-serif",
                fontWeight: "200",
                fontStyle: "normal",
                fontSize: "75px"
              }}>Oscar K. Comunidad</h1>
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
              <Button variant="outline-success" >
                Contact Me
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
