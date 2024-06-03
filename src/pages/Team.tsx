import React from "react";
import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return (
    <div>
      {" "}
      <h2>Team Detail</h2>
      <p>Team ID: {teamId}</p>
    </div>
  );
}
