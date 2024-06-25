import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate, Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";

export default function ProtectedRoute({ path, element }) {
  const { isLogin } = useSelector((s) => s.user);

  return (
    <Routes>
      <Route
        path={path}
        element={!isLogin ? <Navigate to="/login" replace={true} /> : element}
      />
    </Routes>
  );
}
