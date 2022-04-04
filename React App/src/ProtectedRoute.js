import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

export default function ProtectedRoute() {
  const loggedIn = localStorage.getItem('token');
  if (loggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
