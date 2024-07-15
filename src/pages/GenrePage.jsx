import Carousel from "../components/Home/home";
import { Row, Col, Container, Button } from "react-bootstrap";
import Genre from "../components/genre/genre";
import { useEffect } from "react";
function home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
