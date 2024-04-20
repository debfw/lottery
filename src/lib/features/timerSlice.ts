import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalSeconds: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTotalSeconds: (state, action) => {
      state.totalSeconds = action.payload;
    },
    resetTotalSeconds: (state) => {
      state.totalSeconds = 0;
    },
  },
});

export const { setTotalSeconds, resetTotalSeconds } = timerSlice.actions;
export default timerSlice.reducer;
