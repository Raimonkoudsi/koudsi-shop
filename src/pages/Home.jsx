import React from 'react';

//components
import ProductList from '@containers/ProductList';
import Header from '@components/Header';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <ProductList />
        </React.Fragment>
    )
}

export default Home;
