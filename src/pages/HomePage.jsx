import Carousel from "../components/Home/home";
import { Row, Col, Container, Button } from "react-bootstrap";
import FilmsCard from "../components/CardFilm/cardFilm";

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
