import React from "react";
import { Link } from "react-router-dom";

export default function TeamsIndex() {
  return (
    <div>
      {" "}
      <h2>Teams Index</h2>
      <ul>
        <li>
          <Link to="/teams/1">Team 1</Link>
        </li>
        <li>
          <Link to="/teams/2">Team 2</Link>
        </li>
        <li>
          <Link to="/teams/3">Team 3</Link>
        </li>
      </ul>
    </div>
  );
}
