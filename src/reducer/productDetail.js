import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const initialState = {
  product: null,
  isLoading: false,
  error: null,
};

// fetch product by id
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    try {
      const response = await productApi.getProductById(id);
      return response;
    } catch (err) {
      return err.response;
    }
  }
);

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });

    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default productDetailSlice.reducer;
