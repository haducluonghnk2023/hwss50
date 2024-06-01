import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Student from "./pages/Student";
import Employees from "./pages/Employees";
import StudentDetail from "./pages/StudentDetail";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";
import Account from "./pages/Account";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/student/:name" element={<Student />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/student" element={<StudentDetail />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}
