import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginSlice'; // Import the reducer instead
import cartSlice from "./features/cartSlice"
import globalSlice from "./features/globalSlice"
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { apiSlice } from './services/apiSlice';
import networkSlice from "./features/networkSlice"


const persistCartConfig = {
  key:'cart',
  storage
}

const persistedCart = persistReducer(persistCartConfig,cartSlice)

export const store = configureStore({
  reducer: {
    network:networkSlice,
    cart:persistedCart,
    login: loginReducer, // Use the imported reducer
    global:globalSlice,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck:false,
    }).concat([apiSlice.middleware])
});

export const persistor = persistStore(store)
