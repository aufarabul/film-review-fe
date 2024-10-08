import axios from "axios";
import { toast } from "react-toastify";
import { setGenres, setGenre } from "../reducers/genre";

export const getGenres = () => async (dispatch, getState) => {
  // const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/genre`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setGenres(data));
  } catch (error) {
    // if (
    //   error.response?.status === 401 &&
    //   error.response?.data?.message === "jwt malformed"
    // ) {
    //   toast.error("Invalid authentication token. Please login again.");
    // } else {
    // Handle other errors
    toast.error(error?.response?.data?.message);
  }
};

export const getGenre = (navigate, id, setIsLoading) => async (dispatch) => {
  setIsLoading(true);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/genre/${id}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setGenre(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);

    navigate("/");
  }
  setIsLoading(false);
};

// export const getCast = (setCreditsList, idTmdb) => async (dispatch) => {
//   fetch(`https://api.themoviedb.org/3/movie/${idTmdb}/credits`, {
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjk1OTIwNTJlOTIwOTBhM2Q5NmI0MzFmY2QzZjU4NCIsIm5iZiI6MTcyMDcyMTkwNC4yNDAwMDEsInN1YiI6IjY2OTAxYjdlY2FmMjM2YmE2NDIzODUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwxacrGvB9aeUoGFiA0Z77wnqcagWw94VFKsfxmmdOQ`, // Replace with your actual API key
//     },
//   })
//     .then((res) => res.json())
//     .then((json) => setCreditsList(json.cast)) // Make sure to use "cast" instead of "results"
//     .catch((err) => console.error("Error fetching credits:", err));
// };

// export const Addgenre =
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
//       url: `${import.meta.env.VITE_BACKEND_API}api/genres`,
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

// export const Updategenre =
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
//       url: `${import.meta.env.VITE_BACKEND_API}api/genres/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       data: data,
//     };

//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));

//       toast.success(`genre dengan id: ${id} berhasil diupdate`);
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//     setIsLoading(false);
//   };

// export const Deletegenre =
//   (id, navigate, setIsLoading) => async (dispatch, getState) => {
//     setIsLoading(true);

//     const { token } = getState().auth;

//     let config = {
//       method: "delete",
//       maxBodyLength: Infinity,
//       url: `${import.meta.env.VITE_BACKEND_API}/api/genres/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));
//       toast.success(`genre dengan id: ${id} berhasil di hapus`);
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//     setIsLoading(false);
//   };
