import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
interface Props {
  title?: string | null;
  description?: string;
  siteLink?: string;
  tags?: string[];
}

const Highlight = ({ title, description, siteLink, tags }: Props) => {
  const placeholderText: String =
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis nisi varius enim hendrerit adipiscing. Tortor mus diam; class class at sed. Senectus euismod imperdiet eros facilisis non augue? Lacus vitae bibendum libero faucibus est. Ornare himenaeos sapien duis sodales commodo proin egestas. Feugiat augue mattis erat; adipiscing ante porttitor netus. Placerat proin aliquam enim tellus tempus quis velit ultrices. Efficitur quam maximus pulvinar quam molestie?";
  return (
    <Row className="my-3 ">
      <Col>
        <Card className="home-projects">
          <Card.Header className="karla">
            <h5>{title ?? "Project Title"}</h5>
          </Card.Header>
          <Card.Body>
            <Card.Text> {description ?? placeholderText} </Card.Text>
            <Link to={siteLink ?? "https://github.com/SkyMazter"}>
              <Button variant="outline-success">Check It Out!</Button>
            </Link>
            <div className="d-flex align-items-center py-3">
              <p className="m-0 me-1 text-center">Tags:</p>
              {tags?.length ? (
                tags.map((tag, index) => (
                  <Badge className="me-1" key={index} bg="info">
                    {tag}
                  </Badge>
                ))
              ) : (
                <></>
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Highlight;
