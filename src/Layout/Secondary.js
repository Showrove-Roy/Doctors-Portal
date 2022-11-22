import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Share/Header/Header";

const Secondary = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Secondary;
