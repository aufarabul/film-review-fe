import React, { useEffect, useState } from "react";
import { Container, Image, Row, Form, Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFilms, getFilm } from "../../redux/actions/film";

import * as image from "../../assets/image";
import { Box, Skeleton } from "@mui/material";
import FilmsCard from "../CardFilm/cardFilm";

function Film() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true); // Set initial state to true for loading
  const { film } = useSelector((state) => state?.film);
  const [movieMap, setMovieMap] = useState([]);
  const [TvMap, setTvMap] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getFilms()).finally(() => setLoading(false));
    window.scrollTo(0, 0);
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
  console.log(film);
  const loadingbar = (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );

  return (
    <>
      <Row>
        <div className="col-md-6 my-auto p-5">
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>Film</h1>
        </div>
        <div className="col-md-6"></div>
      </Row>
      <Container className="d-flex justify-content-end">
        <Row>
          {isLoading
            ? Array.from(new Array(6)).map((_, index) => (
                <Col key={index} md={4} className="mx-2">
                  {loadingbar}
                </Col>
              ))
            : movieMap.length > 0 &&
              movieMap.map((film) => (
                <FilmsCard
                  className="d-flex justify-content-end"
                  key={film?.id}
                  film={film}
                />
              ))}
        </Row>
      </Container>
    </>
  );
}

export default Film;
