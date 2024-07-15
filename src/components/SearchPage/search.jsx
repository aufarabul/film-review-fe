import React, { useEffect, useState } from "react";
import { Container, Image, Row, Form, Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getFilms, getCast, searchFilms } from "../../redux/actions/film";
import FilmsCard from "../CardFilm/cardFilm";
import * as image from "../../assets/image";
import { Box, Skeleton } from "@mui/material";
import FilmSearch from "./FilmSearch";
import FilmList from "./Filmlist";

function Home() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true); // Set initial state to true for loading
  const { film } = useSelector((state) => state?.film);
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useSelector((state) => state.film.searchResults);

  const handleSelectFilm = (filmName) => {
    setSearchTerm(filmName);
  };
  useEffect(() => {
    dispatch(getFilms()).finally(() => setLoading(false));
  }, [dispatch]);

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
        <div className="container d-flex justify-content-center my-3">
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>
            Cari Film yang Anda Inginkan
          </h1>
        </div>
      </Row>

      <FilmSearch />
      <div
        className="film-overflow  flex-col overflow-auto"
        style={{ maxHeight: "500px" }}
      >
        <FilmList isLoading={isLoading} />
      </div>
    </>
  );
}

export default Home;

{
  /* <Row>
        {isLoading
          ? Array.from(new Array(6)).map((_, index) => (
              <Col key={index} md={4} className="mx-2">
                {loadingbar}
              </Col>
            ))
          : film.length > 0 &&
            film.map((film) => <FilmsCard key={film?.id} film={film} />)}
      </Row> */
}
