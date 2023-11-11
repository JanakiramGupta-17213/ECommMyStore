import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts, addtoCart } from '../../actions/productsActions';
import Products from '../../components/products/products'

const Home = (props) => {
    useEffect(() => {
        props.getProductDetailsForUser();
    }, []);

    const addToCart = (product) => {
        props.addProductCart(product);
    }
    return (
        <>
            <Products products={props.products} addToCart={addToCart} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetailsForUser: () => dispatch(getProducts()),
        addProductCart: (product) => dispatch(addtoCart(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);