import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchApi from "../api/searchApi";

const initialState = {
  items: [],
  isLoading: false,
  total: 0,
  totalPage: 0,
  error: null,
};

export const fetchSearchProduct = createAsyncThunk(
  "search/fetchSearchProduct",
  async (search) => {
    try {
      const response = await searchApi.search(search);
      return response;
    } catch (err) {
      return err.response;
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchProduct.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchSearchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload.matchProducts;
      state.total = action.payload.total;
      state.totalPage = action.payload.totalPage;
    });

    builder.addCase(fetchSearchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    });
  },
});

export default searchSlice.reducer;
