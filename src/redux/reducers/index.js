import { combineReducers } from "@reduxjs/toolkit";
// import auth from "./auth";
import film from "./film";
import ulasan from "./ulasan";
import cast from "./cast";
import genre from "./genre";
import trailer from "./trailer";

// it will combining some reducers that will be possible to call in the jsx files
export default combineReducers({
  // auth,
  film,
  ulasan,
  cast,
  genre,
  trailer,
});
