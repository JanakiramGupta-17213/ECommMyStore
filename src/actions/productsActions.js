import axios from 'axios';

export const getProductsDetails = (data) => {
  // console.log(data);
  return {
    type: 'GET_USER_PRODUCTS',
    data: data,
  }
}

export const getProducts = () => {
  return dispatch => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        dispatch(getProductsDetails(res.data));
      })
  }
}
