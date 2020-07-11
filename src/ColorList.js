import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <>
      <header>
        <h2>Welcome to the color factory.</h2>
      </header>
      <Link exact path to="/colors/new">
        <h1>Add Color</h1>
      </Link>
      <p>Please add or select a color.</p>
      <div>
        {colors.map((color) => (
          <Link exact path to={`/colors/${color.name}`} key={color.id}>
            <h2>{color.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ColorList;
