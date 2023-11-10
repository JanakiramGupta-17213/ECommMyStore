import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/commerce.png";

const PrimarySearchAppBar = ({ totalItems }) => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {location.pathname === "/" && (
        <form className="form-inline m-l-auto">
          <button
            component={Link}
            to="/cart"
            aria-label="Show cart items"
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Cart - {totalItems}
          </button>
        </form>
      )}
    </nav>
  );
};

export default PrimarySearchAppBar;
