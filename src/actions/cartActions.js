// actions/cartActions.js
export const addToCart = (productId, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      productId,
      quantity,
    },
  };
};

// Implement other actions (removeFromCart, clearCart) as needed
