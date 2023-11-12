import React from 'react';
import Product from './product/product';
import { connect } from 'react-redux';

const Products = ({ products, addToCart }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="product-sec">
      <div className="container-fluid product-listing-block">
        <div className="row">
          {products.map((product, i) => (
            <Product
              product={product}
              onAddToCart={() => addToCart(product)}
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
    // onAddToCart: (productId, quantity) => dispatch(addToCart(productId, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(Products);
