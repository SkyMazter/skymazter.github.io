import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import P5Background from "./components/P5Background";
import { Link } from "react-router-dom";
import Highlight from "./components/Highlight";
import AboutMe from "./components/AboutMe";
import { useRef } from "react";

const App = () => {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    if (section == "about") {
      aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
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
        <Container className="home-header ">
          <Row className="justify-content-lg-center">
            <Col className="d-flex justify-content-center" lg={8}>
              <h1 className="fw-bolder typewriter karla text-center">
                Oscar K. Comunidad
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="subheading karla">
                Software Developer | Facilitator | Digital Justice Advocate
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
              <Button
                variant="outline-primary"
                className="subheading"
                onClick={() => {
                  scrollToSection("about");
                }}
              >
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

        <AboutMe aboutref={aboutMeRef} />

        <Container className="">
          <Row>
            <Col className="border-2 border-dark border-bottom">
              <h2 className="typewriter karla ">Highlighted Projects</h2>
            </Col>
          </Row>
          <Highlight tags={["React", "Typescript", "Web"]} />
          <Highlight />
          <Highlight />
          <Row className="centerThis">
            <Col xs={3} className="seperator"></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
