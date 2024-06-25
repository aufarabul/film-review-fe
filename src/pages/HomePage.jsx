import Carousel from "../components/carousel/Carousel";
import { Row, Col, Container } from "react-bootstrap";

function home() {
  return (
    <>
      <Row>
        <Container>
          <Carousel />
        </Container>
      </Row>
    </>
  );
}

export default home;
