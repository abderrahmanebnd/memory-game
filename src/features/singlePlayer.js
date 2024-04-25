import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 0,
  moves: 0,
};
const singlePlayerSlice = createSlice({
  name: "singlePlayer",
  initialState,
  reducers: {
    resetPlayer(state) {
      state.time = initialState.time;
      state.moves = initialState.moves;
    },
    increaseMoves(state) {
      state.moves += 1;
    },
    setTime(state, action) {
      state.time += 1;
    },
  },
});

export const { increaseMoves, setTime, resetPlayer } =
  singlePlayerSlice.actions;
export default singlePlayerSlice.reducer;
