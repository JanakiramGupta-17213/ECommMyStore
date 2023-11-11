const initialState = {
  products: [],
  cartData: [],
};

const productReducer = (state = initialState, action) => {
  // console.log('outside switch',action.type);
  switch (action.type) {
    case 'GET_USER_PRODUCTS':
      // console.log('reducer',action.data);
      return {
        ...state,
        products: action.data
      }
    case 'ADD_TO_CART':
      let itemIndex = state.cartData.findIndex(item => item.id === action.data.id);
      if (itemIndex !== -1) {
        // If the product is already in the cart, update its quantity
        return {
          ...state,
          cartData: state.cartData.map((product, index) =>
            index === itemIndex
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        }
      } else {
        // If the product is not in the cart, add it with quantity 1
        return {
          ...state,
          cartData: [...state.cartData, { ...action.data, quantity: 1 }]
        }
      }
    case 'REMOVE_TO_CART':
      let updatedCart = state.cartData.map(item => {
        if (item.id === action.data.id) {
          if (item.quantity > 0) {
            // console.log(item)
            return {
              ...item,
              quantity: item.quantity - 1
            }
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartData: updatedCart.filter(item => item.quantity > 0),
      }
    default: return state;
  }
}

export default productReducer;
