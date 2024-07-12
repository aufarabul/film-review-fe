import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMDYwNC4wNTQ4MjYsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.azIwNK5498r71vh-w_BZyptwjZ_gTBySDzyodTFp9Z0";
// const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const fetchMovieCredits = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/123/credits?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`,
        },
      }
    );
    dispatch({ type: "FETCH_CREDITS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_CREDITS_FAILURE", payload: error });
  }
};
