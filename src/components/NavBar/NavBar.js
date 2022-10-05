import React from "react";
import Links from "../Links/Links";
import "./NavBar.css";
import { Bars3Icon } from "@heroicons/react/24/solid";

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
      <Bars3Icon className="h-6 w-6" />
      <ul className="md:flex justify-center ">
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
