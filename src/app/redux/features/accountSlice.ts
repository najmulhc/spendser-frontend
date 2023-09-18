import { Account } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Account = {
  balence: 10,
  deposit: 20,
  withdraw: 10,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state: Account, action: PayloadAction<Account>) => {
      state.balence = action.payload.balence;
      state.deposit = action.payload.deposit;
      state.withdraw = action.payload.withdraw;
    },
    clearAccount: (state: Account, action: PayloadAction<Account>) => {
      state = { ...state, ...initialState };
    },
  },
});

export const { setAccount, clearAccount } = accountSlice.actions;

export default accountSlice.reducer;
