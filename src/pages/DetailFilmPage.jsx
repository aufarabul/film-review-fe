import * as React from "react";
import { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getFilm } from "../redux/actions/film";
import { Box, Skeleton, Rating, Typography } from "@mui/material";
import CardReview from "../components/CardReview/CardReview";
import InputReview from "../components/Input/InputReview";
import "../styles/scroll.css";
const detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(4.5);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { film } = useSelector((state) => state?.film);
  const [showVideo, setShowVideo] = useState(false);
  const ulasanState = useSelector((state) => state.ulasan);
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  const ratings = film?.ulasans?.map((ulasan) => ulasan.rating) || [];
  const totalRating = ratings.reduce((acc, num) => acc + num, 0);
  const average =
    ratings.length > 0 ? (totalRating / ratings.length).toFixed(1) : "0.0";
  console.log(parseFloat(average));

  useEffect(() => {
    dispatch(getFilm(navigate, id, setIsLoading));
  }, [dispatch, id, navigate, ulasanState]);

  console.log(film);

  const loadingbar = (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton
        className="m-5"
        variant="rectangular"
        width={210}
        height={118}
      />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
  const emdedVideo = (
    <iframe
      style={{ width: "100%", height: "auto" }}
      fluid
      src="https://www.youtube.com/embed/sQQJEiESrK0"
      title=""
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
  return (
    <>
      <Row>
        <Col md={6} className=" d-flex justify-content-center">
          <Container className=" d-flex justify-content-center">
            {isLoading ? (
              loadingbar
            ) : (
              <Image
                style={{ maxHeight: "500px" }}
                fluid
                className="rounded-4 m-5 "
                src={film?.image_film}
              />
            )}
          </Container>
        </Col>
        <Col
          md={6}
          className=" d-flex justify-content-center align-items-center"
        >
          <Container className="p-0 my-0">
            <h4 style={{ color: "white" }} className=" ">
              {film?.nama_film}
            </h4>
            <p style={{ color: "white", fontWeight: "800" }}>Sutradara :</p>
            <p style={{ color: "white" }}>{film?.sutradara}</p>
            <p style={{ color: "white", fontWeight: "800" }}>Tahun :</p>
            <p style={{ color: "white" }}>{film?.tahun}</p>
            <p style={{ color: "white", fontWeight: "800" }}>Genre :</p>
            <p style={{ color: "white" }}>{film?.genre?.nama_genre}</p>
            <p style={{ color: "white", fontWeight: "800" }}>Sipnosis :</p>
            <p style={{ color: "white" }}>{film?.description}</p>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={6} className=" d-flex justify-content-center">
          <Container className=" d-flex justify-content-center">
            <Card
              fluid
              className="text-center m-5"
              style={{ backgroundColor: "#222831", color: "white" }}
            >
              <Card.Header>LayarKata Rating</Card.Header>
              <Card.Body>
                <h1>{parseFloat(average)}/5</h1>

                <Rating
                  name="read-only"
                  value={parseFloat(average)}
                  readOnly
                  precision={0.5}
                />
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </Container>
        </Col>
        <Col
          md={6}
          className=" d-flex justify-content-center align-items-center"
        >
          <div className="m-0">
            <Button onClick={toggleVideo}>
              {showVideo ? "Close Tralier" : "Watch Trailer"}
            </Button>
            {showVideo && <div className="video-container">{emdedVideo}</div>}
          </div>
        </Col>
      </Row>
      <Row className="cardReview">
        <CardReview film={film} />
      </Row>
      <InputReview id={film?.id} />
    </>
  );
};

export default detail;
