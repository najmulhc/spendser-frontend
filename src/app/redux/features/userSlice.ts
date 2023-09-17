import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    clearUser: (state: User, action: PayloadAction<User>) => {
      (state.username = ""), (state.email = "");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
