import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    toggleLoading: (state) => !state,
  },
  extraReducers: {},
});

const { reducer, actions } = loadingSlice;
export const { toggleLoading } = actions;
export default reducer;
