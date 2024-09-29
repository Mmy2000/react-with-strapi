import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axios.config"; // Fix typo: 'axois.config' to 'axios.config'

const initialState = {
  loading: false, // Fix typo: 'loadnig' to 'loading'
  data: null,
  error: null,
};

export const userLogin = createAsyncThunk("login/userLogin", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const { data } = await axiosInstance.get(`/api/auth/local`);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data); // Ensure the error is in the expected format
  }
});

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true; // Fix typo: 'loadnig' to 'loading'
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false; // Fix typo: 'loadnig' to 'loading'
        state.data = action.payload;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false; // Fix typo: 'loadnig' to 'loading'
        state.data = [];
        state.error = action.payload;
      });
  },
});

export const selectLogin = ({ login }) => login;
export default loginSlice.reducer; // Ensure you export the reducer
