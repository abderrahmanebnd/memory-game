import { configureStore } from "@reduxjs/toolkit";
import choicesReducer from "./features/choices";
import gameReducer from "./features/game";

const store = configureStore({
  reducer: {
    choices: choicesReducer,
    game: gameReducer,
  },
});

export default store;
