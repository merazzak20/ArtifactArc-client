import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>

      <div className="bg-base-200">
        <div className="max-w-7xl mx-auto">
          <Footer></Footer>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
