import * as React from "react";
import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Image,
  Card,
  Carousel,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getFilm, getCast } from "../redux/actions/film";
import { fetchMovieCredits } from "../redux/actions/cast";
import { Box, Skeleton, Rating, Typography } from "@mui/material";
import CardReview from "../components/CardReview/CardReview";
import InputReview from "../components/Input/InputReview";
import "../styles/scroll.css";
import CastCarousel from "../components/CastCard/castCard";
const detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(4.5);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { film } = useSelector((state) => state?.film);
  const [showVideo, setShowVideo] = useState(false);
  const ulasanState = useSelector((state) => state.ulasan);
  const credits = useSelector((state) => state?.credits);
  const error = useSelector((state) => state?.error);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  const ratings = film?.ulasans?.map((ulasan) => ulasan.rating) || [];
  const totalRating = ratings.reduce((acc, num) => acc + num, 0);
  const average =
    ratings.length > 0 ? (totalRating / ratings.length).toFixed(1) : "0.0";
  const idTmdb = film?.id_tmdb;
  const [creditsList, setCreditsList] = useState([]);
  //  const getCast = () => {
  //    fetch(
  //      `https://api.themoviedb.org/3/movie/${film?.id_tmdb}/credits?language=en-US`,
  //      {
  //        headers: {
  //          accept: "application/json",
  //          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`, // Replace with your actual API key
  //        },
  //      }
  //    )
  //      .then((res) => res.json())
  //      .then((json) => setCreditsList(json.cast)) // Make sure to use "cast" instead of "results"
  //      .catch((err) => console.error("Error fetching credits:", err));
  //  };
  useEffect(() => {
    dispatch(fetchMovieCredits);
    dispatch(getFilm(navigate, id, setIsLoading));
    dispatch(getCast(setCreditsList, idTmdb));
  }, [dispatch, id, navigate, ulasanState, setCreditsList, idTmdb]);

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
          <Container className="">
            <h4
              style={{ color: "white" }}
              className="d-flex justify-content-center"
            >
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
              <Card.Header>BioskopNarasi Rating</Card.Header>
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
      <Row>
        <CastCarousel creditsList={creditsList} />
      </Row>
      <Row className="cardReview">
        <CardReview film={film} />
      </Row>
      <Container className="mt-5">
        <InputReview id={film?.id} />
      </Container>
    </>
  );
};

export default detail;
