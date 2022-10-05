import React from "react";
import "./Links.css";

const Links = ({ route }) => {
  console.log(route);
  return (
    <div>
      <h1>{route.name}</h1>
    </div>
  );
};

export default Links;
