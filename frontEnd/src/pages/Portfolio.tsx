import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h2 className="text-center">Projects</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={2}>
          <p>Settings</p>
        </Col>
        <Col xs={12} lg={10}>
          <p>Projects</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
