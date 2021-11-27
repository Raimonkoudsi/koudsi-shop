import React from 'react';
import '@styles/Order.scss';

//assets
import flechaIcon from '@icons/flechita.svg';

const Order = () => {
	return (
		<div className="order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={flechaIcon} alt="arrow" />
		</div>
	);
}

export default Order;