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
      {props.cartItems.length > 0 ?
        props.cartItems.map((item) => {
          return (
            <div className="col-md-3" key={item.id}>
              <div className="card">
                <img className="product_image" src={item.image} alt="" />
                <div className="card-body">
                  <h5>{item.title}</h5>
                  <p> ${item.price} </p>
                  <p> Category : {item.category} </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="btn-group">
                  <button className="btn btn-primary" style={{ marginRight: "20px"}} onClick={() => addToCart(item)}>+</button>
                  <button className="btn btn-primary" onClick={() => removeProductFromCart(item)}>-</button>
                </div>
              </div>
            </div>
          );
        })
        : 
        <div>No Items in Cart</div>
        }
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
