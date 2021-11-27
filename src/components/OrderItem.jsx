import React, {useContext} from 'react';
import '@styles/OrderItem.scss';

//assets
import closeIcon from '@icons/icon_close.png';

//context
import AppContext from '@context/AppContext';


const OrderItem = ({ product }) => {

	const {
		removeFromCart
	} = useContext(AppContext);


	const handleRemove = (product) => {
		removeFromCart(product);
	}

	return (
		<div className="order-item">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={closeIcon} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;