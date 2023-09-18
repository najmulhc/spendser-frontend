import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import accountSlice from "./features/accountSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    account: accountSlice
  },
});

export type StoreType = ReturnType<typeof store.getState>;

export default store;
