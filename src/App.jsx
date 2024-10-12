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
import Contact from './pages/Contact'
import Notfound from './components/Notfound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import CookieService from './pages/CookieService'
import AdminDashboard from './pages/dashboard'
import LayoutDashboard from './pages/dashboard/LayoutDashboard'
import DashboardProductsTable from './pages/dashboard/DashboardProductsTable'
import DashboardCategoryTable from './pages/dashboard/DashboardCategoryTable'

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Main Layout for non-dashboard routes
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "products/:id",
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <LayoutDashboard />, // Dashboard Layout
    children: [
      {
        element: <DashboardProductsTable/>,
        path: "products",
      },
      {
        element: <DashboardCategoryTable/>,
        path: "categories",
      },
      {
        index: true,
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <Notfound />,
      },
      // Add other dashboard-related routes here if needed
    ],
  },
]);


const queryClient = new QueryClient();
function App() {

  window.addEventListener("offline", (e) => {
    console.log("offline");
  });

  window.addEventListener("online", (e) => {
    console.log("online");
  });

  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App
