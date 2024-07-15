import { Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/cardFilm.css";
import { Box, Skeleton, Rating, Typography } from "@mui/material";

const filmsCard = ({ film }) => {
  const ratings = film?.ulasans?.map((ulasan) => ulasan.rating) || [];
  const totalRating = ratings.reduce((acc, num) => acc + num, 0);
  const average =
    ratings.length > 0 ? (totalRating / ratings.length).toFixed(1) : "0";
  return (
    <Col className="films-Card">
      <Card
        className="film-card  shadow p-3 mb-5 rounded "
        fluid
        style={{
          width: "18rem",
          backgroundColor: "#222831",
          color: "#EBF4F6",
          height: "450px",
          textDecoration: "none",
        }}
        as={Link}
        to={`/film/${film?.id}`}
      >
        <Card.Img
          className="car-film"
          variant="top"
          src={film?.image_film}
          key={film?.id}
          fluid
          // style={{ width: "50%", height: "auto", objectFit: "cover" }}
        />
        <Card.Body>
          {/* <Card.Subtitle className="mb-2 text-muted">
            {film?.nama_film}
          </Card.Subtitle> */}
          <Card.Title>
            {film?.nama_film} ({film?.tahun})
          </Card.Title>
          <Card.Text>{film?.genre?.nama_genre}</Card.Text>
          <Card.Text>
            {average == 0 ? "Belum ada Ulasan" : `${average}/ 5`}
            <Rating
              className="m-2"
              name="read-only"
              value={parseFloat(average)}
              readOnly
              precision={0.2}
              size="small"
            />
          </Card.Text>
          {/* <Button variant="secondary">See Details</Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

filmsCard.propTypes = {
  film: PropTypes.object,
};

export default filmsCard;
