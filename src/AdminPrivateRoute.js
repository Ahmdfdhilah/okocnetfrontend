import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const AdminPrivateRoute = ({ Component }) => {
  const { isAuthenticated, loading, role, token } = useContext(AuthContext);
  useEffect(()=>{
  },[isAuthenticated, loading, role, token])
  
  return isAuthenticated && !loading ? (
    <Component />
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminPrivateRoute;
