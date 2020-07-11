import React from "react";
import { Link } from "react-router-dom";
import "./ColorPage.css";

const ColorPage = ({ color, history }) => {
  if (color === undefined) history.push("/colors");

  return (
    <div className="ColorPage" style={{ backgroundColor: color.value }}>
      <h1>{color.name}!</h1>
      <Link to="/colors">
        <h1>Go Back</h1>
      </Link>
    </div>
  );
};

export default ColorPage;
