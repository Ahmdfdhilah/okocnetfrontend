import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const AdminPrivateRoute = ({ Component }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated && !loading ? (
    <Component />
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminPrivateRoute;
