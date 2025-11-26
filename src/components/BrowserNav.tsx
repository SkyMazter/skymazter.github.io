import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const BrowserNav = () => {
  const navOps: string[] = ["All", "Web", "Shell", "Misc"];

  const [isActive, setIsActive] = useState<number>(0);

  const navigate = useNavigate();

  const handleTabClick = (index: number) => {
    setIsActive(index);
  };

  const handleReturnBttn = () => {
    navigate("/");
  };

  return (
    <>
      <Row className="browser-nav">
        <Col
          xs={2}
          md={1}
          onClick={handleReturnBttn}
          className="d-flex justify-content-evenly align-items-center"
        >
          <BsArrowLeftCircle className="return-bttn" />
          <BsArrowRightCircle className="inactive-bttn" />
        </Col>
        {navOps.map((title, index) => (
          <Col
            key={index}
            xs={2}
            className={`browser-tab ${isActive === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <p> ~/{title}/Projects</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BrowserNav;
