import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "normal",
};

const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
