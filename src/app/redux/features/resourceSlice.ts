import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  withdraw: [],
  deposit: [],
};
interface Resource {
  type: "withdraw" | "deposit";
  data: string[];
}
const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<Resource>) => {
        //@ts-ignore
      state[action.payload.type] = action.payload.data;
    },
  },
});

export const { setType } = resourceSlice.actions;

export default resourceSlice.reducer;
