import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

interface Props {
  title?: string | null;
  description?: string;
  siteLink?: string;
  tags?: string[];
  githubLink?: string;
}

const Highlight = ({
  title,
  description,
  siteLink,
  tags,
  githubLink,
}: Props) => {
  const placeholderText: string =
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis nisi varius enim hendrerit adipiscing. Tortor mus diam; class class at sed. Senectus euismod imperdiet eros facilisis non augue? Lacus vitae bibendum libero faucibus est.";
  return (
    <Col className="my-3" xs={12} md={6} lg={4}>
      <Card className="home-projects h-100">
        <Card.Header className="karla">
          <h5>{title ?? "Project Title"}</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text> {description ?? placeholderText} </Card.Text>

          {githubLink ? (
            <Link to={githubLink ?? "https://github.com/SkyMazter"}>
              <Button variant="outline-success me-2">
                Git Repo <BsGithub />
              </Button>
            </Link>
          ) : (
            <></>
          )}

          {siteLink ? (
            <Link to={siteLink ?? "https://github.com/SkyMazter"}>
              <Button variant="outline-success me-2">Check It Out!</Button>
            </Link>
          ) : (
            <></>
          )}

          {tags ? (
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
          ) : (
            <></>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Highlight;
