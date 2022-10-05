import React from "react";
import Links from "../Links/Links";
import "./NavBar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Order", path: "/order" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-purple-200 w-full">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul
        className={`bg-purple-200 w-full md:flex justify-center absolute duration-500 ease-in  ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
