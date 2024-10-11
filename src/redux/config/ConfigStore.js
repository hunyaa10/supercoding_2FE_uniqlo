import { configureStore } from "@reduxjs/toolkit";
import test from "../store/Test";

const store = configureStore({
  reducer: {
    test,
  },
});

export default store;
