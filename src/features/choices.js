import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "Numbers",
  playersNumber: "1",
  size: "16",
};

const choicesSlice = createSlice({
  name: "choices",
  initialState: initialState,
  reducers: {
    selectTheme(state, action) {
      state.theme = action.payload;
    },
    selectNumberofPlayers(state, action) {
      state.playersNumber = action.payload;
    },
    selectGridSize(state, action) {
      state.size = action.payload;
    },
  },
});

export const { selectTheme, selectNumberofPlayers, selectGridSize } =
  choicesSlice.actions;

export default choicesSlice.reducer;
