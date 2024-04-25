import { configureStore } from "@reduxjs/toolkit";
import choicesReducer from "./features/choices";
import gameReducer from "./features/game";
import singlePlayerReducer from "./features/singlePlayer";

const store = configureStore({
  reducer: {
    choices: choicesReducer,
    game: gameReducer,
    singlePlayer: singlePlayerReducer,
  },
});

export default store;
