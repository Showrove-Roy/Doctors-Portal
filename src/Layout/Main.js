import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import Footer from "../Pages/Share/Footer/Footer";
import Header from "../Pages/Share/Header/Header";

const Main = () => {
  const { loading } = useAuth();
  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center h-96'>
        <p className='font-semibold text-secondary text-2xl'>Loading...</p>
        <progress className='progress w-56 progress-secondary'></progress>;
      </div>
    );
  }
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
