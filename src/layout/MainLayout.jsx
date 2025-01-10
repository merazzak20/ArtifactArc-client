import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(navigation.state);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className=" sticky top-0 bg-white z-50 shadow-md transition-all duration-300">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>

      <div className="bg-base-200">
        <div className="max-w-7xl mx-auto mt-11">
          <Footer></Footer>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
