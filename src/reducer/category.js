import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../api/categoryApi";

const initialState = {
  categories: [],
  isLoading: false,
  products: [],
  total: 0,
  totalPage: 0,
  error: null,
};

// fetch all categories
export const fetchAllCategory = createAsyncThunk(
  "category/fetchAllCategory",
  async () => {
    try {
      const response = await categoryApi.getAllCategory();
      return response;
    } catch (err) {
      return err.response;
    }
  }
);

// fetch Product by Category
export const fetchProductByCategory = createAsyncThunk(
  "category/fetchProductByCategory",
  async ({ slug, searchParams }) => {
    try {
      const response = await categoryApi.getProductByCategory({
        slug,
        searchParams,
      });
      return response;
    } catch (err) {
      return err.response;
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all Category
    builder.addCase(fetchAllCategory.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });

    builder.addCase(fetchAllCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.data.error;
    });

    // fetch product by category
    builder.addCase(fetchProductByCategory.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProductByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.totalPage = action.payload.totalPage;
    });

    builder.addCase(fetchProductByCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.data.error;
    });
  },
});

export default categorySlice.reducer;
