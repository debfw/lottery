import { faker } from "@faker-js/faker";
import { createSlice, configureStore } from "@reduxjs/toolkit";

type userType = {
  name: string;
  id: string;
};
type UserStateType = {
  users: userType[];
  winner: string | null;
  hasWinner: boolean;
};

faker.seed(123);
const initialState: UserStateType = {
  users: Array.from({ length: 30 }, () => ({
    name: faker.person.fullName(),
    id: faker.string.uuid(),
  })),
  winner: null,
  hasWinner: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setWinner: (state, action) => {
      state.winner = state.users[action.payload].name;
      state.hasWinner = true;
    },
    clearWinner: (state) => {
      state.winner = null;
      state.hasWinner = false;
    },
 
  },
});

export const { setWinner, clearWinner } = usersSlice.actions;
export default usersSlice.reducer;
