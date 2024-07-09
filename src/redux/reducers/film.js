import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  film: [],
};

// Define the slice
const filmsSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setFilms: (state, action) => {
      state.film = action.payload;
    },
    setFilm: (state, action) => {
      state.film = action.payload;
    },
  },
});

// export the setter funtion
export const { setFilms, setFilm } = filmsSlice.actions;

// export the reducer
export default filmsSlice.reducer;
