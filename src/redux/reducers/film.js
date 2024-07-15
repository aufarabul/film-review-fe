import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  film: [],
  searchResults: [],
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
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

// export the setter funtion
export const { setFilms, setFilm, setSearchResults } = filmsSlice.actions;

// export the reducer
export default filmsSlice.reducer;
