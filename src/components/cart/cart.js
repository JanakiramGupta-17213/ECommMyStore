import React from 'react';
import { connect } from 'react-redux';
import { addtoCart,removeToCart } from '../../actions/productsActions';

const Cart = (props) => {
  const addToCart = (product) => {
    props.addProductCart(product);
  }

  const removeProductFromCart = (product) => {
    props.removeProductCart(product);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        {props.cartItems.map((item) => {
          return (
            <div className="col-sm-4" key={item.id}>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <div className="btn-group">
                <button className="btn btn-default" onClick={() => addToCart(item)}>+</button>
                <button className="btn btn-default" onClick={() => removeProductFromCart(item)}>-</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.products.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductCart: (product) => dispatch(addtoCart(product)),
    removeProductCart: (product) => dispatch(removeToCart(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
