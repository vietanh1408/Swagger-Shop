import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const initialState = {
  items: [],
  isLoading: false,
  total: 0,
  totalPage: 0,
};

// fetch all product
export const fetchAllProduct = createAsyncThunk(
  "product/fetchAllProduct",
  async (value) => {
    try {
      const response = await productApi.getProduct(value);
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
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.items = [];
      state.total = 0;
    });
  },
});

export default productSlice.reducer;
