import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/usersSlice";
import timerReducer from "./features/timerSlice";
import inputReducer from "./features/inputSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      users: usersReducer,
      timer: timerReducer,
      input: inputReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
