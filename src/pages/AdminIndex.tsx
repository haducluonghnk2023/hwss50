import React from "react";
import { Link } from "react-router-dom";

export default function AdminIndex() {
  return (
    <div>
      {" "}
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/acount">Account</Link>
        </li>
        <li>
          <Link to="/admin/product">Product</Link>
        </li>
        <li>
          <Link to="/admin/order">Order</Link>
        </li>
      </ul>
    </div>
  );
}
