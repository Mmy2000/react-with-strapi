import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout() {
  
  
  return (
    <>
      <Navbar />
      <div className=" mx-auto  my-6  py-10">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
