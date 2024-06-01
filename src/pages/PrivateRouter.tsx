import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
