import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Route , RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Product from './pages/Product'
import Layout from './pages/Layout'
import { QueryClient, QueryClientProvider } from "react-query";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "products/:id",
        element: <Product/>,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App
