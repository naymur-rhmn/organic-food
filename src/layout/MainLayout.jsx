import React from "react";
import Navbar from "../components/Global/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Global/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
