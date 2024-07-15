import Carousel from "../components/Home/home";
import { Row, Col, Container, Button } from "react-bootstrap";
import Search from "../components/SearchPage/search";
function SearchPage() {
  return (
    <>
      <Row>
        <Container>
          <Search />
        </Container>
      </Row>
    </>
  );
}

export default SearchPage;
