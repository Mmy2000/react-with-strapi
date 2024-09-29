import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginSlice'; // Import the reducer instead

export const store = configureStore({
  reducer: {
    login: loginReducer // Use the imported reducer
  },
});
