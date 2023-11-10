// components/products/products.js
import React from 'react';
import Product from './product/product';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

const Products = ({ products, onAddToCart }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="product-sec">
      <div className="container-fluid">
        <div className="row">
          {products.map((product, i) => (
            <Product
              product={product}
              onAddToCart={() => onAddToCart(product.id, 1)}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (productId, quantity) => dispatch(addToCart(productId, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(Products);
