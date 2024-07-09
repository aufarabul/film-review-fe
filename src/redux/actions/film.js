import axios from "axios";
import { toast } from "react-toastify";
import { setFilms, setFilm } from "../reducers/film";

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
