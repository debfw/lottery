import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "value",
  initialState: {
    value: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
    clearInputValue(state) {
        state.value = '';
      },
  },
});

export const { setInputValue,clearInputValue } = inputSlice.actions;
export default inputSlice.reducer;
