import React, {useState, useContext} from 'react';
import '@styles/ProductItem.scss';

//assets
import addCartIcon from '@icons/bt_add_to_cart.svg';
import addedCartIcon from '@icons/bt_added_to_cart.svg';

//context
import AppContext from '@context/AppContext';


const ProductItem = ({ product }) => {

	const [added, setAdded] = useState(false);

	const {
		state:{cart},
		addToCart
	} = useContext(AppContext);

	const handleCart = (item) => {
		addToCart(item);

		if (cart.filter(items => items.id == item.id))
			setAdded(true);
	}


	return (
		<div className="product-item">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{!added ? (
					<figure className="product-add" onClick={() => handleCart(product)}>
						<img src={addCartIcon} alt="" />
					</figure>
				) : (
					<figure className="product-added">
						<img src={addedCartIcon} alt="" />
					</figure>
				)}

			</div>
		</div>
	);
}

export default ProductItem;