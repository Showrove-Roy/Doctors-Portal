import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import Header from "../Pages/Share/Header/Header";
import Loading from "../Pages/Share/Loading/Loading";

const Secondary = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Secondary;
