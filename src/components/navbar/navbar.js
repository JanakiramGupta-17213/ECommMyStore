import React from "react";
import { useLocation, NavLink } from "react-router-dom";


const PrimarySearchAppBar = () => {
  // const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/cart">cart</NavLink>
    </nav>
  );
};

export default PrimarySearchAppBar;
