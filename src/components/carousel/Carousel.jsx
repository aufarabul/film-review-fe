import React, { useEffect, useState } from "react";
import { Container, Image, Row, Form, Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getFilms, getCast } from "../../redux/actions/film";
import FilmsCard from "../CardFilm/cardFilm";
import * as image from "../../assets/image";
import { Box, Skeleton } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true); // Set initial state to true for loading
  const { film } = useSelector((state) => state?.film);
  const [creditsList, setCreditsList] = useState([]);

  const idTmdb = film?.id_tmdb;

  useEffect(() => {
    dispatch(getFilms()).finally(() => setLoading(false));
    getCast(setCreditsList, idTmdb); // Update loading state after fetching data
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
        <div className="col-md-6 my-auto p-5">
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>
            Halo selamat datang di Bioskop Narasi
          </h1>
          <p style={{ color: "#EBF4F6" }}>
            Bergabunglah dengan komunitas pecinta film Indonesia, bagikan review
            dan rekomendasi film favorit Anda
          </p>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </div>
        <div className="col-md-6">
          <Container className="rounded-4 ">
            <Carousel
              rounded
              className="d-flex justify-content-center  rounded-3 m-3"
              style={{ borderRadius: "20px" }}
            >
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  rounded
                  className="d-block w-100 rounded-3"
                  style={{ objectFit: "scale-down" }}
                  src={image.menantuSinting}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  className="d-block w-100"
                  src={image.menantuSinting}
                  style={{ objectFit: "cover" }}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  className="d-block w-100"
                  src={image.menantuSinting}
                  style={{ objectFit: "cover" }}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      </Row>
      <Row>
        {isLoading
          ? Array.from(new Array(6)).map((_, index) => (
              <Col key={index} md={4}>
                {loadingbar}
              </Col>
            ))
          : film.length > 0 &&
            film.map((film) => <FilmsCard key={film?.id} film={film} />)}
      </Row>
    </>
  );
}

export default Home;
