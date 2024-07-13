import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  credits: [],
  trailer: null,
  error: null,
};

export const fetchMovieTrailer = createAsyncThunk(
  "movies/fetchMovieTrailer",
  async (idTmdb) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${idTmdb}/videos`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer YOUR_API_KEY`, // Replace with your actual API key
        },
      }
    );
    const data = await response.json();
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer ? trailer.key : null;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchCreditsSuccess: (state, action) => {
      state.credits = action.payload;
    },
    fetchCreditsFailure: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieTrailer.fulfilled, (state, action) => {
        state.trailer = action.payload;
      })
      .addCase(fetchMovieTrailer.rejected, (state, action) => {
        state.error = "Failed to fetch trailer";
      });
  },
});

export const { fetchCreditsSuccess, fetchCreditsFailure } = moviesSlice.actions;

export default moviesSlice.reducer;
