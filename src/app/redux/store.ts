import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import accountSlice from "./features/accountSlice";
import resourceSlice from "./features/resourceSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    account: accountSlice, 
    resource: resourceSlice
  },
});

export type StoreType = ReturnType<typeof store.getState>;

export default store;
