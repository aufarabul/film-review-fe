import { combineReducers } from "@reduxjs/toolkit";
// import auth from "./auth";
import film from "./film";
import ulasan from "./ulasan";

// it will combining some reducers that will be possible to call in the jsx files
export default combineReducers({
  // auth,
  film,
  ulasan,
});
