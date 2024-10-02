import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginSlice'; // Import the reducer instead
import cartSlice from "./features/cartSlice"
import globalSlice from "./features/globalSlice"
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"


const persistCartConfig = {
  key:'cart',
  storage
}

const persistedCart = persistReducer(persistCartConfig,cartSlice)

export const store = configureStore({
  reducer: {
    cart:persistedCart,
    login: loginReducer, // Use the imported reducer
    global:globalSlice
  },
});

export const persistor = persistStore(store)
