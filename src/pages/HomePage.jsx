import Carousel from "../components/carousel/Carousel";
import { Row, Col, Container, Button } from "react-bootstrap";
import FilmsCard from "../components/CardFilm/cardFilm";

function home() {
  return (
    <>
      <Row>
        <Container>
          <Carousel />
        </Container>
        <div className="container mt-5"></div>
      </Row>
    </>
  );
}

export default home;
