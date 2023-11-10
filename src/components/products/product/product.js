// components/products/product/product.js
import { Typography } from "@material-ui/core";
import React from "react";

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={product.media.source} alt="" />
        <div className="card-body">
          <h2>{product.name}</h2>
          <p> ${product.price.formatted} </p>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
