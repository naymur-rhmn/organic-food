import React from "react";
import Navbar from "../components/Global/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Global/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
