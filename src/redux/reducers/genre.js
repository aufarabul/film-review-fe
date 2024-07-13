import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  genre: [],
};

// Define the slice
const genresSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.genre = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

// export the setter funtion
export const { setGenres, setGenre } = genresSlice.actions;

// export the reducer
export default genresSlice.reducer;
