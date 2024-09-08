import { Button, Col, Container, Row } from "react-bootstrap";
import P5Background from "./components/P5Background";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div
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
          zIndex: 10,
          overflow: "scroll",
          height: "100%",
        }}
      >
        <Container className="home-header">
          <Row className="justify-content-lg-center">
            <Col className="d-flex justify-content-center" lg={8}>
              <h1 className="fw-bolder typewriter text-center">
                Oscar K. Comunidad
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="subheading">
                Software Developer | Photographer | Digital Justice Advocate
              </p>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center">
              <Link to={"/portfolio"}>
                <Button variant="outline-danger" className="subheading">
                  Portfolio
                </Button>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button variant="outline-primary" className="subheading">
                About Me
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button variant="outline-success" className="subheading">
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
