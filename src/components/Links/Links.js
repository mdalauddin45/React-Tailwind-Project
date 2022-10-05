import React from "react";
import "./Links.css";

const Links = ({ route }) => {
  console.log(route);
  return (
    <div>
      <li>
        <a href={route.path}>{route.name} </a>
      </li>
    </div>
  );
};

export default Links;
