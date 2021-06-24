import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const initialState = {
  items: [],
  isLoading: false,
  total: 0,
};

// fetch all product
export const fetchAllProduct = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    try {
      const response = await productApi.getAll();
      return response;
    } catch (err) {
      console.log("loi..........", err);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload.products;
      state.total = action.payload.total;
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.items = [];
      state.total = 0;
    });
  },
});

export default productSlice.reducer;
