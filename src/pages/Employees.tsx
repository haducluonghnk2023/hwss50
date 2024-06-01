import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const [studentName, setStudentName] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/student?studentName=${studentName}`);
  };
  return (
    <div>
      <h1>Employee Search</h1>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="nhap ten"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
