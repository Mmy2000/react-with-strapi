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
import InternetConnectionProvider from './app/services/InternetConnectionProvider.jsx';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <InternetConnectionProvider>
        <ChakraProvider>
          <CartDrawer />
          <App />
        </ChakraProvider>
      </InternetConnectionProvider>
    </Provider>
  </QueryClientProvider>
);
