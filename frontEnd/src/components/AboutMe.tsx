import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} className="border-2 border-dark border-bottom">
          <h2 className="typewriter karla ">About Me</h2>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={12} md={4}>
          <Image></Image>
        </Col>
        <Col xs={12} md={8} >
          <h4 className="karla">Fully Stacked</h4>
          <p>
            First and foremost I am a Full Stack Software Engineer, Proficient
            in C++, JavaScript/Typescript and Swift/UIKit. I have been coding
            since late 2017 when all I had was a used surface pro that could
            barely hold a charge, leading me to receive my Bachelors degree in
            computer science in early June 2024. Currently looking for post
            graduate internship/career opportunities to grow this portfolio and
            showcase my talents. I have experience working on both UI design and
            back end functionality for both web and iOS applications.
          </p>
          <p>
            I've also had experience with the configurations of server nodes,
            networks and wireless access points. I've contributed to the
            deployment and maintenance of a community network node. Developed
            local server programs for portable network kits deployed across
            america. Coordinated the deployment of a web hosting server for the
            community node.
          </p>
          <h4 className="karla">Elevation through Education</h4>
          <p>
            For the better part of 4 years, I have been an advocate for digital
            equity in underserved communities within the New York City Area.
            I've been involved with{" "}
            <Link to={"https://www.communitytechny.org/"}>CTNY</Link> and El
            Puente, in the creation of their Community Tech Lab and a
            facilitator of said lab. Coordinating and facilitating workshops,
            community events and special projects taking place in our community
            lab. Developing curriculum revolving around Web Development,
            Wireless Technologies and Computer Networking meant to educate
            participants on both technology and how it relates to community
            organization, self governance, and resilience.
          </p>
        </Col>
      </Row>
      <Row className="centerThis">
        <Col xs={3} className="seperator">
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
