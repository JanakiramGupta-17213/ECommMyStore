import React from "react";

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id);
  };
  return (
    <div className="col-md-3" style={{marginBottom: "2%"}}>
      <div className="card">
        <img className="product_image" src={product.image} alt="" />
        <div className="card-body">
          <h5>{product.title}</h5>
          <p> ${product.price} </p>
          <p> Category : {product.category} </p>
          <div className="product_description" title={product.description}>
            {product.description}
          </div>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
