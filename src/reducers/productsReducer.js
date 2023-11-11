const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  // console.log('outside switch',action.type);
  switch (action.type) {
    case 'GET_USER_PRODUCTS':
      console.log('reducer',action.data);
      return {
        ...state,
        products: action.data
      }
    default: return state;
  }
}

export default productReducer;
