import axios from "axios";
import { toast } from "react-toastify";
import { setUlasans, setUlasan } from "../reducers/ulasan";

export const getUlasans = () => async (dispatch, getState) => {
  // const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/ulasan`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setUlasans(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

export const getUlasan = (navigate, id, setIsLoading) => async (dispatch) => {
  setIsLoading(true);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/ulasan/${id}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setUlasan(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);

    navigate("/");
  }
  setIsLoading(false);
};

export const AddUlasan =
  (navigate, name, id, comment, rating, setIsLoading) => async (dispatch) => {
    setIsLoading(true);

    let data = new FormData();
    data.append("nama_user", name);
    data.append("film_id", id);
    data.append("comment", comment);
    data.append("rating", rating);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/ulasan`,
      headers: {},
      data: data,
    };
    try {
      const response = await axios.request(config);

      console.log(JSON.stringify(response.data));

      //   window.location.reload();
      toast.success("Review Berhasil Ditambahakan");
      dispatch({ type: "ADD_ULASAN_SUCCESS", payload: newUlasan });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setIsLoading(false);
  };

// export const UpdateUlasan =
//   (navigate, plate, film_id, comment, rating, image, setIsLoading, id) =>
//   async (dispatch, getState) => {
//     setIsLoading(true);
//     const { token } = getState().auth;

//     let data = new FormData();
//     data.append("plate", plate);
//     data.append("film_id", film_id);
//     data.append("comment", comment);
//     data.append("rating", rating);
//     if (image) {
//       data.append("image", image);
//     }

//     let config = {
//       method: "put",
//       url: `${import.meta.env.VITE_BACKEND_API}api/ulasans/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       data: data,
//     };

//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));

//       toast.success(`ulasan dengan id: ${id} berhasil diupdate`);
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//     setIsLoading(false);
//   };

// export const DeleteUlasan =
//   (id, navigate, setIsLoading) => async (dispatch, getState) => {
//     setIsLoading(true);

//     const { token } = getState().auth;

//     let config = {
//       method: "delete",
//       maxBodyLength: Infinity,
//       url: `${import.meta.env.VITE_BACKEND_API}/api/ulasans/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));
//       toast.success(`ulasan dengan id: ${id} berhasil di hapus`);
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//     setIsLoading(false);
//   };
