import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Student from "./pages/Student";
import Employees from "./pages/Employees";
import StudentDetail from "./pages/StudentDetail";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";
import Account from "./pages/Account";
import Teams from "./pages/Teams";
import TeamsIndex from "./pages/TeamsIndex";
import Team from "./pages/Team";
import AdminIndex from "./pages/AdminIndex";
import Acount from "./pages/Acount";
import Product from "./pages/Product";
import Order from "./pages/Order";
import LazyLoadComp from "./pages/LazyLoadComp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";

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
        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<Team />} />
        </Route>
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<AdminIndex />} />
          <Route path="acount" element={<Acount />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="/" element={<LazyLoadComp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}
