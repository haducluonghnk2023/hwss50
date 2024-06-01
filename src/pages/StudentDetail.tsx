import React from "react";
import { useLocation } from "react-router-dom";

export default function StudentDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentName = queryParams.get("studentName");

  return (
    <div>
      <h1>Student Detail</h1>
      <p>Student Name: {studentName}</p>
    </div>
  );
}
