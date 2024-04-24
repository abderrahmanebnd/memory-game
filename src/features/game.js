import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], //icons or numbers
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state, action) {
      state.action = action.payload;
    },
  },
});

export const { startGame } = gameSlice.actions;
export default gameSlice.reducer;
