import React, {useContext} from 'react';
import '@styles/ProductItem.scss';

//assets
import addCartIcon from '@icons/bt_add_to_cart.svg';

//context
import AppContext from '@context/AppContext';


const ProductItem = ({ product }) => {

	const {
		addToCart
	} = useContext(AppContext);

	const handleCart = (item) => {
		addToCart(item);
	}

	return (
		<div className="product-item">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleCart(product)}>
					<img src={addCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;