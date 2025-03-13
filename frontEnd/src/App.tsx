import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import P5Background from "./components/P5Background";
// import { Link } from "react-router-dom";
import Highlight from "./components/Highlight";
import AboutMe from "./components/AboutMe";
import { useRef } from "react";
import ContactMe from "./components/ContactMe";

const App = () => {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    if (section == "about") {
      aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section == "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section == "portfolio") {
      portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
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
              {/* <Link to={"/portfolio"}>
                <Button variant="outline-danger" className="subheading">
                  Portfolio
                </Button>
              </Link> */}
              <Button
                variant="outline-danger"
                className="subheading"
                onClick={() => {
                  scrollToSection("portfolio");
                }}
              >
                Portfolio
              </Button>
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
              <Button
                onClick={() => {
                  scrollToSection("contact");
                }}
                variant="outline-success"
                className="subheading"
              >
                Contact Me
              </Button>
            </Col>
          </Row>
        </Container>

        <AboutMe aboutref={aboutMeRef} />

        <Container ref={portfolioRef}>
          <Row>
            <Col className="border-2 border-dark border-bottom">
              <h2 className="typewriter karla">Highlighted Projects</h2>
            </Col>
          </Row>
          <Row>
            <Highlight
              title={"Community Tech Lab Website"}
              description="This is a website I built to showcase the work El Puente and CTNY has done when it comes to community technology and digital equity. Showcasing version history of Portable Network Kits, Our trained stewards, and examples of community owned networks throughout the United States."
              githubLink="https://github.com/Community-Tech-Lab/CTLab_Website"
              siteLink="https://www.communitytechlab.org"
              tags={["React", "Typescript", "Web"]}
            />
            <Highlight
              title={"PNK_Ansible_Automation"}
              githubLink="https://github.com/SkyMazter/PNK_Ansible_Automation"
              tags={["Ansible", "Linux", "Raspberry Pi", "Shell"]}
              description="This is a small side project to help automate the creation and configuration of a portable network kit (PNK) server. These are ansible playbooks designed to excuted on a Raspberry Pi 4 or 5. These playbooks install and configure most of what comprises the PNK Server. As of right now there is a playbook that sets up web server using apache hosting a wordpress site. As well as a playbook dedicated to make installing the unifi controller for the Raspberry Pi easier."
            />
            <Highlight
              title={"PNKv3 Server Image"}
              description="The PNK server image sets up a local web server with a chat service, file sharing system, and document editor. Once configured, the system operates independently, facilitating seamless communication and collaboration within a self-contained network."
              githubLink="https://github.com/Community-Tech-Lab/PNK-Software"
              tags={["Linux", "Shell", "Raspberry Pi"]}
            />
          </Row>
          <Row className="centerThis">
            <Col xs={3} className="seperator"></Col>
          </Row>
        </Container>

        <ContactMe contactRef={contactRef} />
      </div>
    </div>
  );
};

export default App;
