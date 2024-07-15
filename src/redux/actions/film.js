import axios from "axios";
import { toast } from "react-toastify";
import { setFilms, setFilm } from "../reducers/film";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFilms = () => async (dispatch, getState) => {
  // const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/film`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setFilms(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
export const searchFilms = (name) => async (dispatch, getState) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/film?name=${name}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setFilms(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
export const getFilm = (navigate, id, setIsLoading) => async (dispatch) => {
  setIsLoading(true);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/film/${id}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setFilm(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);

    navigate("/");
  }
  setIsLoading(false);
};

// export const getCast =
//   (setCreditsList, idTmdb, retryCount = 3) =>
//   async (dispatch) => {
//     const fetchTrailer = async (retryCount) => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${idTmdb}/credits`,
//           {
//             headers: {
//               accept: "application/json",
//               Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`, // Replace with your actual API key
//             },
//           }
//         );

//         if (!response.ok) {
//           if (response.status === 404 && retryCount > 0) {
//             console.warn(`Retrying... ${retryCount} attempts left`);
//             return fetchTrailer(retryCount - 1);
//           } else {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//         }

//         const data = await response.json();
//         setCreditsList(data.cast);
//       } catch (err) {
//         console.error("Error fetching credits:", err);
//       }
//     };

//     await fetchTrailer(retryCount);
//   };

export const getCast =
  (setCreditsList, idTmdb, mediaType, retryCount = 3) =>
  async (dispatch) => {
    const fetchTrailer = async (retryCount) => {
      try {
        const baseUrl =
          mediaType === "movie"
            ? "https://api.themoviedb.org/3/movie/"
            : "https://api.themoviedb.org/3/tv/";
        const url = `${baseUrl}${idTmdb}/credits`;

        const response = await fetch(url, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`, // Replace with your actual API key
          },
        });

        if (!response.ok) {
          if (response.status === 404 && retryCount > 0) {
            console.warn(`Retrying... ${retryCount} attempts left`);
            return fetchTrailer(retryCount - 1);
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }

        const data = await response.json();
        setCreditsList(data.cast);
      } catch (err) {
        console.error("Error fetching credits:", err);
      }
    };

    await fetchTrailer(retryCount);
  };

const fetchWithRetry = async (url, options, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        if (response.status === 404) {
          console.error("API returned 404, retrying...");
          throw new Error("404 Not Found");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
};

// export const fetchMovieTrailer = async (
//   setTrailer,
//   idTmdb,
//   mediaType,
//   retryCount = 5
// ) => {
//   // Function to fetch the trailer
//   const fetchTrailer = async (retry) => {
//     try {
//       const baseUrl =
//         mediaType === "movie"
//           ? "https://api.themoviedb.org/3/movie/"
//           : "https://api.themoviedb.org/3/tv/";
//       const url = `${baseUrl}${idTmdb}/videos`;

//       const response = await fetch(url, {
//         headers: {
//           accept: "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`, // Replace with your actual API key
//         },
//       });

//       if (!response.ok) {
//         if (response.status === 404 && retry > 0) {
//           console.warn(`Retrying... ${retry} attempts left`);
//           return fetchTrailer(retry - 1);
//         } else {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//       }

//       const data = await response.json();
//       const trailer = data.results.find(
//         (video) => video.type === "Trailer" && video.site === "YouTube"
//       );

//       setTrailer(trailer ? trailer.key : null);
//     } catch (err) {
//       console.error("Error fetching trailer:", err);
//       setTrailer(null); // Or handle error differently (e.g., set error state)
//     }
//   };

//   await fetchTrailer(retryCount);
// };

// export const fetchMovieTrailer = async (setTrailer, idTmdb, mediaType) => {
//   const baseUrl =
//     mediaType === "movie"
//       ? "https://api.themoviedb.org/3/movie/"
//       : "https://api.themoviedb.org/3/tv/";
//   const urls = [
//     `${baseUrl}${idTmdb}/videos`,
//     `${baseUrl}${idTmdb}/videos?language=en-US`,
//     `${baseUrl}${idTmdb}/videos?language=id-ID`,
//   ];

//   for (const url of urls) {
//     try {
//       const response = await fetch(url, {
//         headers: {
//           accept: "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`, // Replace with your actual API key
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       const trailer = data.results.find(
//         (video) => video.type === "Trailer" && video.site === "YouTube"
//       );

//       if (trailer) {
//         setTrailer(trailer.key);
//         return;
//       }
//     } catch (err) {
//       console.error(`Error fetching trailer from ${url}:`, err);
//     }
//   }

//   // If no trailer found after all URLs
//   setTrailer(null);
// };

export const fetchMovieTrailer = async (
  setTrailer,
  idTmdb,
  mediaType,
  retry = 3
) => {
  // Function to fetch the trailer
  const fetchTrailer = async (retry, language = "") => {
    try {
      const baseUrl =
        mediaType === "movie"
          ? "https://api.themoviedb.org/3/movie/"
          : "https://api.themoviedb.org/3/tv/";
      const url = `${baseUrl}${idTmdb}/videos${language}`;

      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`, // Replace with your actual API key
        },
      });

      if (!response.ok) {
        if (response.status === 404 && retry > 0) {
          console.warn(`Retrying... ${retry} attempts left`);
          return fetchTrailer(retry - 1, language);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        throw new Error("No trailers found");
      }

      let trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      if (!trailer && language === "") {
        // Try with English language if not found
        return fetchTrailer(retry, "?language=en-US");
      }

      if (!trailer && language === "?language=en-US") {
        // Try with Indonesian language if not found with English
        return fetchTrailer(retry, "?language=id-ID");
      }

      setTrailer(trailer ? trailer.key : null);
    } catch (err) {
      console.error("Error fetching trailer:", err);
      if (retry > 0) {
        console.warn(`Retrying... ${retry} attempts left`);
        return fetchTrailer(retry - 1, language);
      }
    }
  };

  await fetchTrailer(retry);
};

// export const fetchMovieTrailer = createAsyncThunk(
//   "movies/fetchMovieTrailer",
//   async (idTmdb) => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${idTmdb}/videos`,
//       {
//         headers: {
//           accept: "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDg2MzYzMy41NTY2NTksInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSZfnotW2SixjmktIWapso9VtDEWDSK_VZvCrdWwR2o`, // Ganti dengan API key Anda
//         },
//       }
//     );
//     const data = await response.json();
//     const trailer = data.results.find(
//       (video) => video.type === "Trailer" && video.site === "YouTube"
//     );
//     return trailer ? trailer.key : null;
//   }
// );

export const getProvider =
  (setProviderList, idTmdb, mediaType, retryCount = 3) =>
  async (dispatch) => {
    const fetchTrailer = async (retryCount) => {
      try {
        const baseUrl =
          mediaType === "movie"
            ? "https://api.themoviedb.org/3/movie/"
            : "https://api.themoviedb.org/3/tv/";
        const url = `${baseUrl}${idTmdb}/watch/providers`;

        const response = await fetch(url, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`, // Replace with your actual API key
          },
        });

        if (!response.ok) {
          if (response.status === 404 && retryCount > 0) {
            console.warn(`Retrying... ${retryCount} attempts left`);
            return fetchTrailer(retryCount - 1);
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }

        const data = await response.json();
        setProviderList(data.results);
      } catch (err) {
        console.error("Error fetching credits:", err);
      }
    };

    await fetchTrailer(retryCount);
  };

// export const AddFilm =
//   (navigate, plate, manufacture, model, year, image, setIsLoading) =>
//   async (dispatch, getState) => {
//     setIsLoading(true);
//     const { token } = getState().auth;

//     let data = new FormData();
//     data.append("plate", plate);
//     data.append("manufacture", manufacture);
//     data.append("model", model);
//     data.append("year", year);
//     if (image) {
//       data.append("image", image);
//     }

//     let config = {
//       method: "post",
//       url: `${import.meta.env.VITE_BACKEND_API}api/Films`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       data: data,
//     };

//     try {
//       const response = await axios.request(config);

//       console.log(JSON.stringify(response.data));

//       toast.success("Data Mobil Berhasil Ditambahkan");
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//     setIsLoading(false);
//   };

// export const UpdateFilm =
//   (navigate, plate, manufacture, model, year, image, setIsLoading, id) =>
//   async (dispatch, getState) => {
//     setIsLoading(true);
//     const { token } = getState().auth;

//     let data = new FormData();
//     data.append("plate", plate);
//     data.append("manufacture", manufacture);
//     data.append("model", model);
//     data.append("year", year);
//     if (image) {
//       data.append("image", image);
//     }

//     let config = {
//       method: "put",
//       url: `${import.meta.env.VITE_BACKEND_API}api/Films/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       data: data,
//     };

//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));

//       toast.success(`Film dengan id: ${id} berhasil diupdate`);
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//     setIsLoading(false);
//   };

// export const DeleteFilm =
//   (id, navigate, setIsLoading) => async (dispatch, getState) => {
//     setIsLoading(true);

//     const { token } = getState().auth;

//     let config = {
//       method: "delete",
//       maxBodyLength: Infinity,
//       url: `${import.meta.env.VITE_BACKEND_API}/api/Films/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));
//       toast.success(`Film dengan id: ${id} berhasil di hapus`);
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//     setIsLoading(false);
//   };
