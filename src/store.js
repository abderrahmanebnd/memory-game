import { configureStore } from "@reduxjs/toolkit";
import choicesReducer from "./features/choices";
import gameReducer from "./features/game";
import singlePlayerReducer from "./features/singlePlayer";
import multiPlayersReducer from "./features/multiPlayers";
const store = configureStore({
  reducer: {
    choices: choicesReducer,
    game: gameReducer,
    singlePlayer: singlePlayerReducer,
    multiPlayers: multiPlayersReducer,
  },
});

export default store;
