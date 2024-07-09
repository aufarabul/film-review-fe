import { Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/cardFilm.css";

const filmsCard = ({ film }) => {
  return (
    <Col
      className="films-Card "
      md={3}
      sm={6}
      as={Link}
      to={`/film/${film?.id}`}
    >
      <Card
        className="m-5 shadow p-3 mb-5  rounded"
        fluid
        style={{
          width: "18rem",
          backgroundColor: "#088395",
          color: "#EBF4F6",
          height: "450px",
        }}
      >
        <Card.Img
          fluid
          className="car-film"
          variant="top"
          src={film?.image_film}
          key={film?.id}
          // style={{ width: "50%", height: "auto", objectFit: "cover" }}
        />
        <Card.Body>
          {/* <Card.Subtitle className="mb-2 text-muted">
            {film?.nama_film}
          </Card.Subtitle> */}
          <Card.Title>{film?.nama_film}</Card.Title>
          <Card.Text>{film?.genre?.nama_genre}</Card.Text>
          <Button variant="primary">See Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

filmsCard.propTypes = {
  film: PropTypes.object,
};

export default filmsCard;
