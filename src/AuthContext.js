import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const accessToken = localStorage.getItem('token') || null;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null); 

  useEffect(() => {
    const validateToken = async () => {
      try {
        if (accessToken) {
          const response = await axios.get('http://localhost:3000/auth/validate-token', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });

          if (response.data.message === 'Token is valid') {
            setIsAuthenticated(true);
            const userResponse = await axios.get('http://localhost:3000/auth/me', {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            });
            setUserId(userResponse.data.userId);
            const roleResponse = await axios.get(`http://localhost:3000/users/${userResponse.data.userId}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            });
            setRole(roleResponse.data.role);
          } else {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error validating token:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [accessToken, setIsAuthenticated, isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, setIsAuthenticated, userId, role, token: accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
