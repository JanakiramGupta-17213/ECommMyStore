import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import Cart from '../cart/cart';


const PrimarySearchAppBar = (props) => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="app-heading">E-Commerce Application</div>
      <NavLink to="/cart">

      {location.pathname === "/" && (
        <>
          <button
            component={Cart}
            to="/cart"
            aria-label="Show cart items"
            className="btn btn-outline-success my-2 my-sm-0 text-nowrap"
            type="submit"
          >
            Cart - {props.cartItems.length}
          </button>
        </>
      )}
      </NavLink>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.products.cartData,
  };
};

export default connect(mapStateToProps,null)(PrimarySearchAppBar);
