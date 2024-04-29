// multiPlayers slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playersNumber: 0,
  players: [],
  currentTurn: 0, // Initialize currentTurn to 0
};

const multiPlayersSlice = createSlice({
  name: "multiPlayers",
  initialState,
  reducers: {
    setPlayers(state, action) {
      state.playersNumber = action.payload;
      state.players = Array.from({ length: action.payload }, (_, index) => ({
        turn: index === 0,
        matchedPairs: 0,
      }));
    },
    changePlayers(state) {
      const nextPlayerIndex = (state.currentTurn + 1) % state.players.length;

      state.players[state.currentTurn].turn = false;
      state.players[nextPlayerIndex].turn = true;
      state.currentTurn = nextPlayerIndex; // Update currentTurn to next player index
    },
    incrementMatchedPairs(state) {
      const currentPlayerIndex = state.currentTurn - 1;
      state.players[currentPlayerIndex].matchedPairs += 1;
    },
  },
});

export const { setPlayers, changePlayers, incrementMatchedPairs } =
  multiPlayersSlice.actions;
export default multiPlayersSlice.reducer;
