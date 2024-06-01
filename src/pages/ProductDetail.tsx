import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      {" "}
      <div>
        <h1>Product Detail</h1>
        <p>Product ID: {id}</p>
      </div>
    </div>
  );
}
