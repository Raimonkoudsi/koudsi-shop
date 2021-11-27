import React from 'react';
import '@styles/ProductDetail.scss';

//assets
import closeIcon from '@icons/icon_close.png';

//components
import ProductInfo from '@components/ProductInfo';


const ProductDetail = () => {
	return (
		<aside className="product-detail">
			<div className="close">
				<img src={closeIcon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;