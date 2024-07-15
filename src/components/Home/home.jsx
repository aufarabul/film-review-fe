import React, { useEffect, useState } from "react";
import { Container, Image, Row, Form, Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getFilms, searchFilms } from "../../redux/actions/film";
import FilmsCard from "../CardFilm/cardFilm";
import * as image from "../../assets/image";
import { Box, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Quotes from "./Qoutes";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const { film } = useSelector((state) => state?.film);
  const searchResults = useSelector((state) => state.film.searchResults);
  const [movieMap, setMovieMap] = useState([]);
  const [TvMap, setTvMap] = useState([]);

  const handleClick = () => {
    navigate("/search");
  };
  const handleFilmClick = () => {
    navigate("/movies");
  };
  const handleTvClick = () => {
    navigate("/tv");
  };

  useEffect(() => {
    dispatch(getFilms()).finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(film) && film.length > 0) {
      const movieData = film.reduce((acc, film) => {
        if (film.type === "movie") {
          acc.push(film);
        }
        return acc;
      }, []);

      const tvData = film.reduce((acc, film) => {
        if (film.type === "tv") {
          acc.push(film);
        }
        return acc;
      }, []);

      setMovieMap(movieData);
      setTvMap(tvData);
    }
  }, [film]);

  const loadingbar = (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
  const styles = {
    overflowHistory: {
      overflowX: "auto",
      maxWidth: "900px",
    },
  };
  return (
    <>
      <Row
        className="mb-5 d-flex justify-content-center mx-3"
        style={{ textAlign: "left" }}
      >
        <div className="col-md-6 my-auto p-5">
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>
            Halo selamat datang di Bioskop Narasi
          </h1>
          <p style={{ color: "#EBF4F6" }}>
            Bergabunglah dengan komunitas pecinta film Indonesia, bagikan review
            dan rekomendasi film favorit Anda
          </p>
          <Button variant="outline-primary" size="lg" onClick={handleClick}>
            Cari Film
          </Button>
        </div>
        <div className="col-md-6 d-flex justify-content-center my-5">
          <Container className="rounded-4 d-flex justify-content-center">
            <Carousel
              className="d-flex justify-content-center rounded-3 m-3"
              style={{ borderRadius: "20px", maxWidth: "500px" }}
            >
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  className="d-block w-100 rounded-3"
                  src={image.AgakLaen}
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/* <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  className="d-block w-100 rounded-3"
                  src={image.indukGajah}
                  style={{ objectFit: "cover" }}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  className="d-block w-100 rounded-3"
                  src={image.Kretek}
                  style={{ objectFit: "contain" }}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  className="d-block w-100 rounded-3"
                  src={image.budiPekerti}
                  style={{ objectFit: "contain" }}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      </Row>
      <Quotes />
      <Row className="mt-5">
        <Col className="mb-0 p-1">
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>Film</h1>
        </Col>
        <Col className="mb-0 p-1 d-flex justify-content-end">
          <Button
            variant="dark"
            style={{
              backgroundColor: "balck",
              fontWeight: "bold",
              color: "#37B7C3",
            }}
            onClick={handleFilmClick}
          >
            Lihat Semua
          </Button>
        </Col>
      </Row>
      <div className="">
        <Row className="film-overflow  flex-row flex-nowrap overflow-auto">
          {isLoading
            ? Array.from(new Array(6)).map((_, index) => (
                <Col key={index} md={4} className="mx-2">
                  {loadingbar}
                </Col>
              ))
            : movieMap.length > 0 &&
              movieMap.map((film) => <FilmsCard key={film?.id} film={film} />)}
        </Row>
      </div>

      <Row className="mt-5">
        <Col className="mb-0 p-1">
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>TV Series</h1>
        </Col>
        <Col className="mb-0 p-1 d-flex justify-content-end">
          <Button
            variant="dark"
            style={{
              backgroundColor: "balck",
              fontWeight: "bold",
              color: "#37B7C3",
            }}
            onClick={handleTvClick}
          >
            Lihat Semua
          </Button>
        </Col>
      </Row>
      <div className="">
        <Row className="film-overflow flex-row flex-nowrap overflow-auto">
          {isLoading
            ? Array.from(new Array(6)).map((_, index) => (
                <Col key={index} md={4} className="mx-2">
                  {loadingbar}
                </Col>
              ))
            : TvMap.length > 0 &&
              TvMap.map((film) => <FilmsCard key={film?.id} film={film} />)}
        </Row>

        <div />
      </div>
    </>
  );
}

export default Home;
