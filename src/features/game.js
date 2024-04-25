import { createSlice } from "@reduxjs/toolkit";
import { randomNumbersIcons } from "../utils/helpers";

const initialState = {
  items: [],
  openedItems: [],
  matchedPairs: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    newGame(state) {
      state.items = initialState.items;
      state.openedItems = initialState.openedItems;
      state.matchedPairs = initialState.matchedPairs;
    },
    startGame: {
      prepare(theme, size) {
        // Extract theme and size from the arguments
        return { payload: { theme, size } };
      },
      reducer(state, action) {
        const { theme, size } = action.payload;
        const generatedItems = randomNumbersIcons(theme, size);

        state.items = generatedItems.map((item) => ({
          value: item,
          opened: false,
          matched: false,
        }));
        state.openedItems = [];
        state.matchedPairs = [];
      },
    },
    flipCard(state, action) {
      state.items[action.payload].opened = true;
      state.openedItems.push(action.payload);
    },
    checkMatch(state) {
      const [firstIndex, secondIndex] = state.openedItems;

      if (state.items[firstIndex].value === state.items[secondIndex].value) {
        state.items[firstIndex].matched = true;
        state.items[secondIndex].matched = true;
        state.matchedPairs.push(firstIndex, secondIndex);
      } else {
        // If cards don't match, close them
        state.items[firstIndex].opened = false;
        state.items[secondIndex].opened = false;
      }

      // Clear openedItems array
      state.openedItems = [];
    },
  },
});

export const { newGame, startGame, flipCard, checkMatch } = gameSlice.actions;
export default gameSlice.reducer;
