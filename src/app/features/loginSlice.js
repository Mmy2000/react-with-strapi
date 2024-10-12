import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axios.config"; // Fix typo: 'axois.config' to 'axios.config'
import { createStandaloneToast } from "@chakra-ui/react";
import CookieService from "../../pages/CookieService";
import { Navigate, useNavigate } from "react-router-dom";

const { toast } = createStandaloneToast();

const initialState = {
  loading: false, // Fix typo: 'loadnig' to 'loading'
  data: null,
  error: null,
};

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.post(`/api/auth/local`, user);
      return data;
    } catch (error) {
      return rejectWithValue(error); // Ensure the error is in the expected format
    }
  }
);

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
        const date = new Date();
        const IN_DAYS = 3;
        const EXPIRES_IN_DAYS = 1000 * 60 * 60 * 24 * IN_DAYS; // Calculate the expiration time in milliseconds
        date.setTime(date.getTime() + EXPIRES_IN_DAYS); // Correctly set the expiration time
        const options = { path: "/", expires: date }; // Set the expires option
        CookieService.set("jwt", action.payload.jwt, options); // Set the cookie with the options

        toast({
          title: "Logged in successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });        
        
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false; // Fix typo: 'loadnig' to 'loading'
        state.data = [];
        state.error = action.payload;
        toast({
          title: action.payload.response.data.error.message,
          description: "Make sure you have the correct Email or Password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  },
});

export const selectLogin = ({ login }) => login;
export default loginSlice.reducer; // Ensure you export the reducer
