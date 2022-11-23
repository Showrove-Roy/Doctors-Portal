import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import Footer from "../Pages/Share/Footer/Footer";
import Header from "../Pages/Share/Header/Header";
import Loading from "../Pages/Share/Loading/Loading";

const Main = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loading></Loading>;
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
