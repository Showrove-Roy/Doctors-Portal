import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Pages/Share/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [iSAdmin, adminLoading] = useAdmin(user?.email);
  let location = useLocation();

  if (loading || adminLoading) {
    return <Loading></Loading>;
  }
  if (user?.uid && iSAdmin) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default AdminRoute;
