import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "addUser",
  initialState: {
    userName: "",
  },
  reducers: {
    addname: (state, action) => {
      state.userName = action.payload;
    }
  }
});

export const { addname } = nameSlice.actions;
export default nameSlice.reducer;