import React from 'react';
import '@styles/ProductList.scss';

//components
import ProductItem from '@components/ProductItem';

//hooks
import useGetProducts from '@hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products';


const ProductList = () => {

	const products = useGetProducts(API);


	return (
		<section className="main-container">
			<div className="product-list">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;