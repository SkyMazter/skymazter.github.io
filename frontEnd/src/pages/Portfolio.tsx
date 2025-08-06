import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/portfolio.css";
import BrowserNav from "../components/BrowserNav";

const Portfolio = () => {
  return (
    <Container fluid className="karla">
      <BrowserNav />
    </Container>
  );
};

export default Portfolio;
