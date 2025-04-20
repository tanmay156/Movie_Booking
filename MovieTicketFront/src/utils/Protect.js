import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
  if (!isAuthenticated) {
    return null;
  }

  return children; 
};

export default ProtectedRoute;
