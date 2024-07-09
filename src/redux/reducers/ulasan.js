import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  ulasan: [],
};

// Define the slice
const ulasansSlice = createSlice({
  name: "ulasan",
  initialState,
  reducers: {
    setUlasans: (state, action) => {
      state.ulasan = action.payload;
    },
    setUlasan: (state, action) => {
      state.ulasan = action.payload;
    },
  },
});

// export the setter funtion
export const { setUlasans, setUlasan } = ulasansSlice.actions;

// export the reducer
export default ulasansSlice.reducer;
