import React from 'react'
import CookieService from '../pages/CookieService';
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({ children }) {
  const token = CookieService.get("jwt");

  if (token) {
    return children; // If token exists, render the children (protected pages)
  } else {
    return <Navigate to="/login" />; // Redirect to login if no token
  }
}