import Carousel from "../components/Home/home";
import { Row, Col, Container, Button } from "react-bootstrap";
import Genre from "../components/genre/genre";
function home() {
  return (
    <>
      <Row>
        <Container>
          <Genre />
        </Container>
      </Row>
    </>
  );
}

export default home;
