import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  let location = useLocation();

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center h-96'>
        <p className='font-semibold text-secondary text-2xl'>Loading...</p>
        <progress className='progress w-56 progress-secondary'></progress>;
      </div>
    );
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
