import React from "react";
import { useParams } from "react-router-dom";

export default function Student() {
  const { name } = useParams();
  return (
    <div>
      {" "}
      <h1>Student Detail</h1>
      <p>Student Name: {name}</p>
    </div>
  );
}
