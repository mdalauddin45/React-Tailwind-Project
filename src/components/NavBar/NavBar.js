import React from "react";
import Links from "../Links/Links";
import "./NavBar.css";

const NavBar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Order", path: "/order" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
