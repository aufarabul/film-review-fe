// src/features/movies/moviesSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  credits: [],
  error: null,
};

// Define the slice
const moviesSlice = createSlice({
  name: "credits",
  initialState,
  reducers: {
    fetchCreditsSuccess: (state, action) => {
      state.credits = action.payload;
    },
    fetchCreditsFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export the actions
export const { fetchCreditsSuccess, fetchCreditsFailure } = moviesSlice.actions;

// Export the reducer
export default moviesSlice.reducer;
