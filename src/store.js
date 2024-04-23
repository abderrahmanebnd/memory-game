import { configureStore } from "@reduxjs/toolkit";
import choicesReducer from "./features/choices";
const store = configureStore({
  reducer: {
    choices: choicesReducer,
  },
});

export default store;
