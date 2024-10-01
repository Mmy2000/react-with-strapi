import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginSlice'; // Import the reducer instead
import cartSlice from "./features/cartSlice"
import globalSlice from "./features/globalSlice"


export const store = configureStore({
  reducer: {
    cart:cartSlice,
    login: loginReducer, // Use the imported reducer
    global:globalSlice
  },
});
