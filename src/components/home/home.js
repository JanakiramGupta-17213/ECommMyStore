import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from '../../actions/productsActions';
import Products from '../../components/products/products'

const Home = (props) => {
    useEffect(() => {
        props.getProductDetailsForUser();
    }, []);
    console.log(props.products);
    return (
        <>
            <Products products={props.products} />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);