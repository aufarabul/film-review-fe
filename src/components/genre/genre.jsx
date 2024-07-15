import React, { useEffect, useState } from "react";
import { Container, Image, Row, Form, Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, getGenre } from "../../redux/actions/genre";
import FilmsCard from "../CardFilm/cardFilm";
import * as image from "../../assets/image";
import { Box, Skeleton } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true); // Set initial state to true for loading
  const { genre } = useSelector((state) => state?.genre);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGenre(navigate, id, setLoading)).finally(() =>
      setLoading(false)
    );
  }, [dispatch, id, navigate]);

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
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>
            {genre.nama_genre}
          </h1>
        </div>
        <div className="col-md-6"></div>
      </Row>
      <Container>
        <Row>
          {isLoading
            ? Array.from(new Array(6)).map((_, index) => (
                <Col key={index} md={4}>
                  {loadingbar}
                </Col>
              ))
            : genre?.films?.length > 0 &&
              genre?.films?.map((film) => (
                <FilmsCard key={film?.id} film={film} />
              ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
