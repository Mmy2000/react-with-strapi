import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from './app/store.js';
import CartDrawer from './components/CartDrawer.jsx';


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <CartDrawer/>
      <App />
    </ChakraProvider>
  </Provider>
);
