import { Row, Col, Container, Button, Image } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import * as image from "../../assets/image";

function footer() {
  const handleLinkClick = (url) => {
    window.open(url, "_blank"); // Opens link in a new tab
  };
  return (
    <footer style={{ backgroundColor: "#222831", color: "white" }}>
      <Container fluid>
        <Row
          style={{
            minHeight: "150px",
            marginTop: "100px",
          }}
        >
          <Col className="d-flex justify-content-start align-items-center m-3">
            Copyright ©aufarabul
          </Col>

          <Col>
            <p className="mt-5">Follow Me On</p>
            <InstagramIcon
              fontSize="large"
              className="film-card m-2"
              onClick={() =>
                handleLinkClick("https://www.instagram.com/aufarabul")
              } // Replace with your link
            />
            <LinkedInIcon
              fontSize="large"
              className="film-card m-2"
              onClick={() =>
                handleLinkClick(
                  "https://id.linkedin.com/in/muhammad-aufar-abul-karami-1b6502220"
                )
              }
            />
            <YouTubeIcon
              fontSize="large"
              className="film-card m-2"
              onClick={() =>
                handleLinkClick("https://www.youtube.com/@aufarabul")
              }
            />
            <Image
              className="film-card"
              src={image.tiktok}
              style={{ width: "25px" }}
              onClick={() =>
                handleLinkClick(
                  "https://www.tiktok.com/@aufarabul?_t=8o30Qs9e3rU&_r=1"
                )
              }
            />
          </Col>

          <Col className="d-flex justify-content-end align-items-center m-3">
            <h3>BioskopNarasi</h3>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;
