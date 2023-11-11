import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cartItems }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-sm-4" key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <div className="btn-group">
              <button className="btn btn-default">+</button>
              <button className="btn btn-default">-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
