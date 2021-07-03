import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/authApi";

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

// login
export const authLogin = createAsyncThunk(
  "authentication/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.login(data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// register
export const authRegister = createAsyncThunk(
  "authentication/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.register(data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("access-token");
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(authLogin.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });

    builder.addCase(authLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.data.error;
    });

    // register
    builder.addCase(authRegister.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });

    builder.addCase(authRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.data.error;
    });
  },
});

export const { logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
