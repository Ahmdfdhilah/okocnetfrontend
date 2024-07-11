import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const AdminPrivateRoute = ({ Component }) => {
  const { isAuthenticated, loading, role } = useContext(AuthContext);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated && role === "admin"? (
    <Component />
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminPrivateRoute;