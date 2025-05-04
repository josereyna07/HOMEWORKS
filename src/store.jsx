import { configureStore } from "@reduxjs/toolkit";
import firebaseReducer from "./redux/slices/firebaseSlice";

const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
  },
});

export default store;
