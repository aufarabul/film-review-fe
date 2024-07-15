// import React from "react";
// import { useSelector } from "react-redux";
// import FilmsCard from "../CardFilm/cardFilm";
// import { Row, Col } from "react-bootstrap";
// import { Box, Skeleton } from "@mui/material";

// const FilmList = ({ isLoading }) => {
//   const film = useSelector((state) => state.film.film);

//   const loadingBar = (
//     <Box sx={{ pt: 0.5 }}>
//       <Skeleton variant="rectangular" width={210} height={118} />
//       <Skeleton />
//       <Skeleton width="60%" />
//     </Box>
//   );

//   return (
//     <Row>
//       {isLoading
//         ? Array.from(new Array(6)).map((_, index) => (
//             <Col key={index} md={4} className="mx-2">
//               {loadingBar}
//             </Col>
//           ))
//         : film.length > 0 &&
//           film.map((film) => <FilmsCard key={film?.id} film={film} />)}
//     </Row>
//   );
// };

// export default FilmList;

import React from "react";
import { useSelector } from "react-redux";
import FilmsCard from "../CardFilm/cardFilm";
import { Container, Row } from "react-bootstrap";

const FilmList = () => {
  const { film } = useSelector((state) => state?.film);

  return (
    <Container>
      <Row>
        {film?.length > 0 ? (
          film?.map((film) => <FilmsCard key={film.id} film={film} />)
        ) : (
          <h4
            className="d-flex justify-content-center"
            style={{ color: "#37B7C3", marginBottom: "400px" }}
          >
            Maaf Film Tidak Ditemukan
          </h4>
        )}
      </Row>
    </Container>
  );
};

export default FilmList;
