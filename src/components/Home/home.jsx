// import React, { useEffect, useState } from "react";
// import { Container, Image, Row, Form, Button, Col } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
// import { useSelector, useDispatch } from "react-redux";
// import { getFilms, getCast, searchFilms } from "../../redux/actions/film";
// import FilmsCard from "../CardFilm/cardFilm";
// import * as image from "../../assets/image";
// import { Box, Skeleton } from "@mui/material";

// import { useNavigate } from "react-router-dom";

// function Home() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isLoading, setLoading] = useState(true); // Set initial state to true for loading
//   const { film } = useSelector((state) => state?.film);
//   const [searchTerm, setSearchTerm] = useState("");
//   const searchResults = useSelector((state) => state.film.searchResults);
//   let [movieMap, setMovieMap] = useState([]);

//   const handleClick = () => {
//     navigate("/search");
//   };
//   useEffect(() => {
//     dispatch(getFilms()).finally(() => setLoading(false));
//   }, [dispatch]);

//   movieMap = film.reduce((acc, film) => {
//     if (film.type === "movie") {
//       acc[film.id] = film;
//     }
//     return acc;
//   }, {});
//   console.log(movieMap);
//   const tvShowMap = film.reduce((acc, film) => {
//     if (film.type === "tv") {
//       acc[film.id] = film;
//     }
//     return acc;
//   }, {});

//   const loadingbar = (
//     <Box sx={{ pt: 0.5 }}>
//       <Skeleton variant="rectangular" width={210} height={118} />
//       <Skeleton />
//       <Skeleton width="60%" />
//     </Box>
//   );
//   return (
//     <>
//       <Row
//         className="my-5 d-flex justify-content-center"
//         style={{ textAlign: "center" }}
//       >
//         <div className=" my-auto p-5">
//           <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>
//             Halo selamat datang di Bioskop Narasi
//           </h1>
//           <p style={{ color: "#EBF4F6" }}>
//             Bergabunglah dengan komunitas pecinta film Indonesia, bagikan review
//             dan rekomendasi film favorit Anda
//           </p>

//           <Button variant="outline-primary" size="lg" onClick={handleClick}>
//             Cari Film
//           </Button>
//         </div>
//       </Row>
//       <div className="d-flex justify-content-center my-5">
//         <Container className="rounded-4 d-flex justify-content-center">
//           <Carousel
//             rounded
//             className="d-flex justify-content-center  rounded-3 m-3"
//             style={{ borderRadius: "20px", maxWidth: "500px" }}
//           >
//             <Carousel.Item style={{ height: "500px" }}>
//               <Image
//                 rounded
//                 className="d-block w-100 rounded-3"
//                 // style={{ objectFit: "scale-down" }}
//                 src={image.AgakLaen}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 {/* <h5>First slide label</h5>
//                 <p>
//                   Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 </p> */}
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item style={{ height: "500px" }}>
//               <Image
//                 className="d-block w-100 rounded-3"
//                 src={image.indukGajah}
//                 style={{ objectFit: "cover" }}
//                 alt="Second slide"
//               />
//               <Carousel.Caption>
//                 {/* <h5>Second slide label</h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  */}
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item style={{ height: "500px" }}>
//               <Image
//                 className="d-block w-100  rounded-3 d-flex justify-content-center align-items-center"
//                 src={image.Airmata}
//                 style={{ objectFit: "contain" }}
//                 alt="Third slide"
//               />
//               <Carousel.Caption>
//                 <h5>Third slide label</h5>
//                 <p>
//                   Praesent commodo cursus magna, vel scelerisque nisl
//                   consectetur.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </Container>
//       </div>

//       <Row>
//         <div className=" my-auto p-5">
//           <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>Film </h1>
//         </div>
//       </Row>
//       <Row>
//         {isLoading
//           ? Array.from(new Array(6)).map((_, index) => (
//               <Col key={index} md={4} className="mx-2">
//                 {loadingbar}
//               </Col>
//             ))
//           : movieMap.length > 0 &&
//             movieMap.map((film) => <FilmsCard key={film?.id} film={film} />)}
//       </Row>
//     </>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { Container, Image, Row, Form, Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getFilms, searchFilms } from "../../redux/actions/film";
import FilmsCard from "../CardFilm/cardFilm";
import * as image from "../../assets/image";
import { Box, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    dispatch(getFilms()).finally(() => setLoading(false));
  }, [dispatch]);

  // useEffect(() => {
  //   if (film !== 0) {
  //     const movieData = film?.reduce((acc, film) => {
  //       if (film.type === "movie") {
  //         acc.push(film);
  //       }
  //       return acc;
  //     }, []);
  //     const tvData = film?.reduce((acc, film) => {
  //       if (film.type === "tv") {
  //         acc.push(film);
  //       }
  //       return acc;
  //     }, []);
  //     setMovieMap(movieData);
  //     setTvMap(tvData);
  //   }
  // }, [film]);
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
        className="my-5 d-flex justify-content-center"
        style={{ textAlign: "center" }}
      >
        <div className="my-auto p-5">
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
      </Row>
      <div className="d-flex justify-content-center my-5">
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
                src={image.Airmata}
                style={{ objectFit: "contain" }}
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

      <Row>
        <div className="mb-0 p-5">
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>Film</h1>
        </div>
      </Row>
      <div className="">
        <Row className="film-overflow flex-row flex-nowrap overflow-auto">
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

      <Row>
        <div className="mb-0 mt-3 p-5">
          <h1 style={{ fontWeight: "bold", color: "#37B7C3" }}>TV Series</h1>
        </div>
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
      </div>
    </>
  );
}

export default Home;
